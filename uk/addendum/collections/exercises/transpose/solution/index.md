---
title: Розв'язання вправи «Транспонуйте матрицю»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Знайдіть програму у файлі [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Вивід

```
((1 4) (2 5) (3 6))
```

## Коментарі

1. Метаоператор застібки `Z` парує елементи за позицією. Використаний як згортка
`[Z]`, він застібає всі рядки разом, обертаючи стовпці на рядки, — а це рівно й
є транспонування.

{% include nav.html %}
