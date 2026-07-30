---
title: 'Lösung: Welcher Quadrant'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Point {
    has $.x;
    has $.y;

    method quadrant {
        return 'origin'     if $.x == 0 && $.y == 0;
        return 'on an axis' if $.x == 0 || $.y == 0;
        return $.x > 0 ?? ($.y > 0 ?? 'first'  !! 'fourth')
                       !! ($.y > 0 ?? 'second' !! 'third');
    }
}

for Point.new(x => 3, y => 4),  Point.new(x => -2, y => 5),
    Point.new(x => -1, y => -6), Point.new(x => 0, y => 3) -> $point {
    say "({$point.x}, {$point.y}): {$point.quadrant}";
}
```

🦋 Du findest den Quellcode in der Datei [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Ausgabe

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Kommentare

1. Die beiden frühen `return` erledigen zuerst die Sonderfälle — den Ursprung und Punkte,
die auf einer Achse liegen —, sodass der Rest der Methode annehmen darf, dass beide
Koordinaten von null verschieden sind.

1. Der verschachtelte ternäre Operator liest den Quadranten dann an den Vorzeichen von `x`
und `y` ab: Ein positives `x` bedeutet den ersten oder vierten Quadranten, ein negatives
`x` den zweiten oder dritten.

{% include nav.html %}
