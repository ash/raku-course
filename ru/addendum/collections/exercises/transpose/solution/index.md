---
title: 'Решение: Транспонируйте матрицу'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Исходный код можно найти в файле [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Вывод

```
((1 4) (2 5) (3 6))
```

## Комментарии

1. Метаоператор zip `Z` соединяет элементы по позициям. Применённый как свёртка `[Z]`, он сшивает
все строки вместе, превращая столбцы в строки, — это и есть транспонирование.

{% include nav.html %}
