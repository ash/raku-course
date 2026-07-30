---
title: Eine Route mit einem Parameter
translations_gpt:
---

{% include menu.html %}

Die Route auf der vorigen Seite lieferte stets denselben Text. Echte Dienste richten ihre Antwort danach, wonach der Client fragt, und am einfachsten liest man dafür einen Teil der **URL** als Parameter. In einer Cro-Route wird ein Abschnitt hinter dem festen Pfad zu einer Variablen in der Signatur:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello', $name {
        content 'text/plain', "Hello, $name!";
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080 — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Das Spannende ist die Signatur `-> 'hello', $name`: Sie trifft einen Pfad aus zwei Abschnitten — das wörtliche `hello`, dann irgendetwas, gecapturt in `$name`. Der Rest des Programms ist dasselbe Servergerüst wie auf der vorigen Seite. Eine Anfrage nach `/hello/Anna` bindet `$name` an `Anna` und liefert `Hello, Anna!`; `/hello/Bob` liefert `Hello, Bob!`. Eine Route, eine andere Antwort für jeden Namen:

```console
$ curl http://127.0.0.1:8080/hello/Anna
Hello, Anna!
```

> Dieses Beispiel braucht Cro installiert (`zef install cro`).

Parameter sind es, die eine Route klein halten, während sie eine ganze Familie von Pfaden bearbeitet. Eine Route kann mehrere Abschnitte aufnehmen, nur bestimmte Formen treffen, Abfragezeichenketten lesen und JSON liefern — doch alles baut auf diesem einen Gedanken auf: die veränderlichen Teile der URL in der Signatur benennen und sie in der Antwort verwenden.

Pfade, die auf gar keine Route treffen, sind nicht Ihr Problem: Cro beantwortet sie von selbst mit `404 Not Found`. Und wenn eine Route zwar *trifft*, aber nichts liefern kann — der Name schlägt etwa nichts nach —, rufen Sie im Bearbeiter `not-found` auf, um dieselbe 404 absichtlich zu senden. Die **Methode** wird ebenso streng geprüft wie der Pfad: Dieser Block erklärt nur `get`, eine `HEAD`- oder `POST`-Anfrage an denselben Pfad wird also mit `405 Method Not Allowed` beantwortet. Sie können das selbst mit `curl -I` sehen, das `HEAD` statt `GET` sendet.

Ein Dienst ist allerdings nur die halbe Geschichte — irgendetwas muss ihn aufrufen. Die nächste Seite dreht Cro um und verwendet seinen **Client**, um mit einem Server wie den eben gebauten zu sprechen.

{% include nav.html %}
