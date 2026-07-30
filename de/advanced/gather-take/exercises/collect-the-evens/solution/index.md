---
title: 'Solution: Jede Zahl wiederholen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @result = gather for 1..4 -> $n {
    take $n for 1..$n;
};

say @result;
```

🦋 Du findest den Quellcode in der Datei [collect-the-evens.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/collect-the-evens.raku).

## Ausgabe

```
[1 2 2 3 3 3 4 4 4 4]
```

## Kommentare

1. Nichts erzwingt ein einzelnes `take` pro Durchlauf. Hier führt das innere `take $n for 1..$n` bei jedem Durchgang eine unterschiedliche Anzahl von `take`-Aufrufen aus, was genau die Flexibilität ist, die `gather`/`take` mächtiger macht als ein einfaches `map`.

1. Die äußere Schleife verwendet absichtlich eine benannte Variable `-> $n`. Wenn wir die innere Schleife mit `$_` schreiben würden, würde das innere `for` die Variable `$_` an seinen eigenen Zähler binden, und wir würden den Zähler statt der aktuellen Zahl nehmen.

1. `gather` sammelt einfach jeden Wert, der genommen wurde, in der Reihenfolge, sodass `@result` am Ende `1`, dann zwei `2`en, dann drei `3`en, dann vier `4`en enthält.

{% include nav.html %}
