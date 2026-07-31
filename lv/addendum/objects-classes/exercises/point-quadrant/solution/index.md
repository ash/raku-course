---
title: 'Risinājums: Kurš kvadrants'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Izvade

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Komentāri

1. Abi agrīnie `return` vispirms apstrādā īpašos gadījumus — koordinātu sākumu un
punktus uz ass —, tāpēc pārējā metode var pieņemt, ka abas koordinātas nav nulle.

1. Ligzdotais trīsvērtīgais operators tad kvadrantu nolasa no `x` un `y` zīmēm:
pozitīvs `x` nozīmē pirmo vai ceturto kvadrantu, negatīvs `x` — otro vai trešo.

{% include nav.html %}
