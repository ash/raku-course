---
title: 'Решение: Формула в классе'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Исходный код можно найти в файле [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Вывод

```
314
```

## Комментарии

1. Метод не обращается ни к одному атрибуту — он работает только со своим параметром `$r`, —
поэтому его можно вызвать у самого класса, не создавая предварительно объект.

1. `Geometry.circle-area(10)` вызывает метод у объекта типа, передавая `10`. Результат равен
`π * 10 * 10`, а после округления — `314`.

{% include nav.html %}
