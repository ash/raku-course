---
title: Розв'язання вправи «Яка чверть»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

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

🦋 Знайдіть програму у файлі [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Вивід

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Коментарі

1. Два ранні `return` спершу обробляють особливі випадки — початок координат і
точки, що лежать на осі, — тож решта методу може вважати, що обидві координати
ненульові.

1. Вкладений тернарний оператор далі зчитує чверть зі знаків `x` та `y`: додатний
`x` означає першу або четверту чверть, від'ємний `x` — другу або третю.

{% include nav.html %}
