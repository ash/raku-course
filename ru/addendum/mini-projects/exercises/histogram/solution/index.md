---
title: 'Решение: Текстовая гистограмма'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Исходный код можно найти в файле [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Вывод

```
apples	#####
pears	###
plums	########
```

## Комментарии

1. Полосы строит оператор повторения строк `x`: `'#' x 5` даёт `#####`. Значение попросту
становится длиной полосы.

1. `\t` между подписью и полосой — символ табуляции, благодаря которому полосы выстраиваются
в столбец, а не начинаются сразу за именами разной длины.

{% include nav.html %}
