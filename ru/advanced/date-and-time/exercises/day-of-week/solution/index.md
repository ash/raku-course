---
title: 'Решение: День недели'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $date = Date.new(2027, 2, 14);
say $date.day-of-week >= 6;
```

🦋 Исходный код можно найти в файле [day-of-week.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/day-of-week.raku).

## Вывод

```
True
```

## Комментарии

1. `day-of-week` нумерует дни от `1` (понедельник) до `7` (воскресенье), поэтому два выходных дня -- это именно числа `6` и `7`.

1. Проверка `>= 6` возвращает `True` для субботы и воскресенья и `False` для любого будничного дня. 14 февраля 2027 года -- это воскресенье (`7`), поэтому программа печатает `True`.

{% include nav.html %}
