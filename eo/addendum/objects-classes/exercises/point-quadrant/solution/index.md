---
title: 'Solvo: Kiu kvadranto'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Eligo

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Komentoj

1. La du fruaj `return` traktas la specialajn kazojn unue — la originon kaj punktojn
kuŝantajn sur akso — por ke la cetero de la metodo povu supozi, ke ambaŭ koordinatoj
estas nenulaj.

1. La ingita ternara operatoro poste deduktas la kvadranton el la signoj de `x` kaj
`y`: pozitiva `x` signifas la unuan aŭ kvaran kvadranton, negativa `x` la duan aŭ
trian.

{% include nav.html %}
