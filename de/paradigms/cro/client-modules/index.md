---
title: Ein Clientmodul verwenden
translations_gpt:
---

{% include menu.html %}

Cro ist nicht nur zum Bauen von Diensten da — es liefert auch einen HTTP-**Client** zum Stellen von Anfragen. Am klarsten lernen Sie ihn kennen, indem Sie ihn auf genau den Server richten, den Sie auf der vorigen Seite gebaut haben. Hier laufen beide Hälften in einem Programm: Wir starten den Dienst und rufen ihn dann selbst auf.

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;
use Cro::HTTP::Client;

# the tiny service from the previous page
my $application = route {
    get -> 'hello' { content 'text/plain', 'Hello from Cro!'; }
}
my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'), :port(8080), :application($application),
);
$server.start;

# now be the client and call it
my $response = await Cro::HTTP::Client.get('http://127.0.0.1:8080/hello');
say await $response.body-text; # Hello from Cro!

$server.stop;
```

`Cro::HTTP::Client.get` liefert ein Promise — passend, denn eine Netzanfrage wird später fertig —, Sie `await`-en es also. Das Antwortobjekt kennt seinen Status, seine Header und seinen Rumpf; `await $response.body-text` reicht den Text zurück, den der Server gesendet hat, `Hello from Cro!`. Vergleichen Sie das mit dem rohen Socket aus dem [Abschnitt über Verbindungen](/de/paradigms/connections/sending-receiving): kein `\r\n`, keine zu zerlegende Statuszeile, kein Lesen in einer Schleife — Client und Server sprechen in wenigen schlichten Zeilen miteinander.

> Dieses Beispiel braucht Cro installiert (`zef install cro`).

## Wenn die Seite nicht da ist

Was, wenn Sie nach einem Pfad fragen, den der Dienst nicht hat? Die Serverseite ist einfach: Eine Anfrage, die auf keine Route trifft, bekommt von Cro automatisch ein `404 Not Found`. Auf der Clientseite **wirft** eine fehlgeschlagene Anfrage — der Fehler reist mit dem Promise mit und tritt beim `await` hervor, genau wie Sie es bei [gebrochenen Promises](/de/paradigms/await/awaiting-promises) gesehen haben —, Sie behandeln ihn also mit den gewohnten Ausnahmewerkzeugen:

```raku
my $response = try await Cro::HTTP::Client.get('http://127.0.0.1:8080/goodbye');
if $! {
    say 'Request failed with status ', $!.response.status; # 404
}
else {
    say await $response.body-text;
}
```

Unser Dienst hat eine Route `hello`, aber kein `goodbye`, das gibt also `Request failed with status 404` aus. Die Ausnahme trägt die vollständige Antwort in ihrem `.response` mit sich, mit Statuscode und Headern zum Nachsehen.

Ihr eigener Dienst ist allerdings nur der nächstgelegene Server. Die nächste Seite richtet denselben Client auf das weite Web — **öffentliche Schnittstellen**, die mit JSON oder terminaltauglichem Text antworten.

{% include nav.html %}
