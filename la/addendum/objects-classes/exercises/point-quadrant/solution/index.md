---
title: 'Solutio: Quis quadrans'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Exitus

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Commentarii

1. Duo `return` matura casus speciales primum tractant — originem et puncta
in axe iacentia — ita ut reliquum methodi utramque coordinatam non nihil esse
sumere possit.

1. Ternarium nidificatum deinde quadrantem ex signis ipsorum `x` et `y` legit:
`x` positivum quadrantem primum vel quartum significat, `x` negativum secundum vel
tertium.

{% include nav.html %}
