---
title: 'Решение: Какая четверть'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Вывод

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Комментарии

1. Два ранних `return` сперва обрабатывают особые случаи — начало координат и точки, лежащие
на оси, — чтобы остальная часть метода могла считать обе координаты ненулевыми.

1. Вложенный тернарный оператор затем считывает четверть по знакам `x` и `y`: положительный `x`
означает первую или четвёртую четверть, отрицательный — вторую или третью.

{% include nav.html %}
