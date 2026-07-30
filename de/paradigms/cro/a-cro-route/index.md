---
title: Eine Cro-Route
translations_gpt:
---

{% include menu.html %}

Ein Cro-HTTP-Dienst wird durch eine Reihe von _Routen_ beschrieben: Jede Route sagt, welche URL sie bearbeitet und was sie liefert. Sie bauen sie in einem `route`-Block mit dem Schlüsselwort `get`:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080/hello — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Lesen Sie die Route als „eine `GET`-Anfrage nach dem Pfad `hello` liefert den Text `Hello from Cro!`“. Die Funktion `content` setzt zugleich den Inhaltstyp und den Rumpf — keine handgeschriebenen Statuszeilen und kein `\r\n` weit und breit. `Cro::HTTP::Server` bindet die Routen an eine Adresse und einen Port, und `.start` beginnt zu bedienen.

Eine Feinheit: `.start` blockiert **nicht** — es startet den Dienst auf Hintergrundthreads und kehrt sofort zurück, und würde das Programm dort schlicht enden, verschwände der Server mit ihm. Der abschließende `react`-Block ist es, der das Programm am Leben hält, und er ist ein alter Bekannter: `whenever signal(SIGINT)` reagiert auf das Unterbrechungssignal (Strg-C auf der Tastatur), indem es den Server anhält und `done` aufruft. Die reaktiven Werkzeuge von früher in diesem Teil sind genau das, womit ein Cro-Programm wartet, bedient und sauber herunterfährt.

> Dieses Beispiel braucht Cro installiert (`zef install cro`). Führen Sie es aus, öffnen Sie `http://127.0.0.1:8080/hello` und halten Sie den Server mit Strg-C an, wenn Sie fertig sind.

> Machen Sie sich nichts daraus, wenn der Server beim Stöbern gelegentlich `Cannot write to a closed socket` ausgibt. Das ist kein Fehler in Ihrem Code: Ein Client — meist ein Browser — hat eine Verbindung geöffnet und fallen lassen, bevor er die Antwort las, wie Browser es bei spekulativen oder abgebrochenen Anfragen regelmäßig tun. Cro vermerkt den verschwundenen Client, und der Server bedient weiter.

Eine Route kann URL-Abschnitte als Parameter aufnehmen, JSON liefern und vieles mehr, doch die Gestalt ist stets diese: erklären, was jeder Pfad tut, die Routen einem Server übergeben und ihn starten. Verglichen mit dem rohen Socket-Server des vorigen Abschnitts nimmt Cro Ihnen die ganze Protokollbuchhaltung ab und lässt Sie nur den Teil schreiben, der Ihren Dienst ausmacht.

Diese Route sagt allerdings immer dasselbe. Die nächste Seite lässt eine Route einen **Parameter** aus der URL lesen, sodass eine einzige Route `/hello/Anna` und `/hello/Bob` verschieden begrüßen kann.

{% include nav.html %}
