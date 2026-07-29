---
title: 'Решение: Недели до Рождества'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my $days = Date.new(2026, 12, 25) - Date.new(2026, 6, 27);
say "{$days div 7} weeks and {$days % 7} days";
```

🦋 Исходный код можно найти в файле [days-until-christmas.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/days-until-christmas.raku).

## Вывод

```
25 weeks and 6 days
```

## Комментарии

1. Вычитание одного объекта `Date` из другого возвращает количество дней между ними -- здесь `181` -- поэтому ручной подсчет дней в каждом месяце не требуется. Более поздняя дата записана первой, чтобы результат был положительным.

1. Целочисленное деление `div` дает целое число недель (`181 div 7` равно `25`), а оператор остатка `%` дает оставшиеся дни (`181 % 7` равно `6`).

{% include nav.html %}
