---
title: 'Solution: Den Konverter verwenden'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

Das Programm, `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Du findest die Quelldateien im Verzeichnis [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Ausgabe

```console
$ raku -I. temperature.raku 100
212
```

## Kommentare

1. `use Temperature` lädt das Modul und importiert die exportierte Subroutine `c-to-f`, sodass das Programm sie direkt aufrufen kann.

1. `sub MAIN($celsius)` empfängt das Kommandozeilenargument, sodass die umzurechnende Temperatur beim Ausführen des Programms gewählt wird und nicht fest einprogrammiert ist. Ohne Argument gibt Raku automatisch eine Verwendungsnachricht aus.

1. Das Modul muss erreichbar sein, weshalb das Programm mit `-I.` ausgeführt wird, damit Raku im aktuellen Verzeichnis nach `Temperature.rakumod` sucht. Die Umrechnung von `100` °C ergibt `212` °F.

{% include nav.html %}
