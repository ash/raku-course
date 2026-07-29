---
title: 'Решение: Ни одного отрицательного'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say so none(3, 7, 2) < 0;
```

🦋 Исходный код можно найти в файле [none-negative.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/none-negative.raku).

## Вывод

```
True
```

## Комментарии

1. Джанкшен `none` истинен, когда сравнению не удовлетворяет **ни одно** значение.

1. Ни одно из `3, 7, 2` не меньше нуля, поэтому результат — `True`. Одно отрицательное значение
сделало бы его `False`.

{% include nav.html %}
