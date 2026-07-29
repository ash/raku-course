---
title: 'Решение: Абсолютное значение'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 Исходный код можно найти в файле [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Вывод

```
7
4
```

## Комментарии

1. Первый кандидат совпадает только с отрицательными числами и возвращает число с противоположным знаком, то есть положительное.

1. Все остальные числа — ноль и положительные — попадают во второй кандидат, который возвращает значение без изменений.

{% include nav.html %}
