---
title: 'Lösung: Laufende Summen'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @numbers = 2, 4, 6, 8;

my $sum = 0;
my @totals = @numbers.map({ $sum += $_ });

say @totals;
```

🦋 Du findest den Quellcode in der Datei [running-totals.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/running-totals.raku).

## Ausgabe

```
[2 6 12 20]
```

## Kommentare

1. Der Block hält eine laufende `$sum` in einer Variablen außerhalb des Maps. Jeder Aufruf
addiert das aktuelle Element und liefert die neue Summe, die abgebildete Liste ist also
die Folge der Teilsummen.

1. Raku hat das eingebaut. Die [dreieckige Reduktion](/de/advanced/metaoperators/reduction)
`[\+]` behält jede Teilsumme, die ganze Lösung ist also ein einziger Ausdruck:

    ```raku
    my @numbers = 2, 4, 6, 8;
    say [\+] @numbers; # (2 6 12 20)
    ```

    Sie liefert eine `Seq`, ihr Gist verwendet also runde Klammern — `(2 6 12 20)` — statt
    des `[2 6 12 20]` des Arrays, doch die Zahlen sind dieselben.

{% include nav.html %}
