---
title: 'Решение: Ровно один'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
say so one(1, 2, 3) == 2;
```

🦋 Исходный код можно найти в файле [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Вывод

```
True
```

## Комментарии

1. Джанкшен `one` истинен, только когда сравнению удовлетворяет **ровно одно** значение.

1. Ровно одно из `1, 2, 3` равно `2`, поэтому результат — `True`. Если бы подошли два (или ни
одного), было бы `False`. `so` схлопывает джанкшен в обычное логическое значение.

{% include nav.html %}
