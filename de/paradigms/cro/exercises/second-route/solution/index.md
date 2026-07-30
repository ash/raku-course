---
title: 'Lösung: Eine zweite Route'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
    get -> 'bye' {
        content 'text/plain', 'Goodbye!';
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

🦋 Du findest den Quellcode in der Datei [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Ausgabe

```
Goodbye!
```

## Kommentare

1. Ein `route`-Block darf beliebig viele Routen enthalten; jedes `get` bearbeitet einen Pfad.

1. Cro ordnet den Anfragepfad der richtigen Route zu, `/hello` und `/bye` liefern also ihre eigenen Antworten.

1. Wie auf der Theorieseite kehrt `.start` sofort zurück, der abschließende `react`-Block hält das Programm also am Leben, bis Sie Strg-C drücken — `whenever signal(SIGINT)` hält dann den Server an und beendet die Reaktion.

{% include nav.html %}
