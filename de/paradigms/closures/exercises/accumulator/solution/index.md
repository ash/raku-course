---
title: 'Lösung: Ein Akkumulator'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
sub make-accumulator {
    my $sum = 0;
    return -> $x { $sum += $x };
}

my &acc = make-accumulator;
acc(10);
say acc(5);
```

🦋 Du findest den Quellcode in der Datei [accumulator.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/closures/accumulator.raku).

## Ausgabe

```
15
```

## Kommentare

1. Die Closure fängt `$sum` ein, die zwischen den Aufrufen bestehen bleibt.

1. `acc(10)` macht die Summe `10`; `acc(5)` addiert fünf und liefert `15`.

{% include nav.html %}
