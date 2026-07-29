---
title: 'Решение: Транспонирайте матрица'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Намерете програмата във файла [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Изход

```
((1 4) (2 5) (3 6))
```

## Коментари

1. Метаоператорът цип `Z` сдвоява елементите по позиция. Използван като свиване
`[Z]`, той ципва всички редове заедно, превръщайки стълбовете в редове — а това е
точно транспониране.

{% include nav.html %}
