---
title: Розв'язання вправи «Текстова гістограма»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Знайдіть програму у файлі [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Вивід

```
apples	#####
pears	###
plums	########
```

## Коментарі

1. Оператор повторення рядка `x` будує кожен стовпчик: `'#' x 5` дає `#####`.
Значення просто стає довжиною стовпчика.

1. `\t` між назвою та стовпчиком є символом табуляції, тож стовпчики шикуються в
колонку, а не починаються одразу після кожної назви іншої довжини.

{% include nav.html %}
