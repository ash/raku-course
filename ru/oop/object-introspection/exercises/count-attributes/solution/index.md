---
title: 'Решение: Подсчёт атрибутов'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

🦋 Исходный код можно найти в файле [count-attributes.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/object-introspection/count-attributes.raku).

## Вывод

```
2
```

## Комментарии

1. `.^attributes` возвращает список атрибутов класса.

1. `.elems` их пересчитывает. Класс `Point` объявляет два атрибута, поэтому ответ — `2`.

{% include nav.html %}
