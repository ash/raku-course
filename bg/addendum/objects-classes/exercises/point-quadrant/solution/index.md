---
title: 'Решение: Кой квадрант'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Изход

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Коментари

1. Двата ранни `return` обработват първо особените случаи — началото на координатната
система и точките, лежащи върху ос, — така че останалата част от метода може да приеме,
че и двете координати са ненулеви.

1. Вложеният тернарен оператор след това отчита квадранта от знаците на `x` и `y`:
положителен `x` означава първи или четвърти квадрант, отрицателен `x` — втори или трети.

{% include nav.html %}
