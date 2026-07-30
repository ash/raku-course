---
title: 'Solution: Quadrate'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
```

🦋 Du findest den Quellcode in der Datei [squares.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/squares.raku).

## Ausgabe

```
[4 16 36]
```

## Kommentare

1. Die Bedingung `if $_ %% 2` entscheidet, *ob* genommen wird, und `$_ ** 2` entscheidet, *was* genommen wird. Nur die geraden Zahlen `2`, `4`, `6` bestehen die Prüfung.

1. Ihre Quadrate `4`, `16`, `36` sind die einzigen Werte, die an `take` übergeben werden, sodass `gather` genau diese sammelt. Das Filtern und Transformieren zusammen in einem `take` durchzuführen, ist etwas, das ein einfaches `map` nicht so elegant ausdrücken kann.

{% include nav.html %}
