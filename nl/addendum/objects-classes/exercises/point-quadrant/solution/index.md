---
title: 'Oplossing: Welk kwadrant'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

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

🦋 Je kunt de broncode vinden in het bestand [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Uitvoer

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Opmerkingen

1. De twee vroege `return`s handelen de bijzondere gevallen eerst af — de oorsprong en punten
die op een as liggen — zodat de rest van de methode mag aannemen dat beide coördinaten
ongelijk aan nul zijn.

1. De geneste ternaire uitdrukking leest daarna het kwadrant af uit de tekens van `x` en `y`: een
positieve `x` betekent het eerste of vierde kwadrant, een negatieve `x` het tweede of
derde.

{% include nav.html %}
