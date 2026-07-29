---
title: 'Решение: Текстова хистограма'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my %sales = apples => 5, pears => 3, plums => 8;

for %sales.sort -> $pair {
    say "{$pair.key}\t{ '#' x $pair.value }";
}
```

🦋 Намерете програмата във файла [histogram.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/histogram.raku).

## Изход

```
apples	#####
pears	###
plums	########
```

## Коментари

1. Операторът за повторение на низ `x` изгражда всеки стълб: `'#' x 5` е `#####`.
Стойността просто става дължината на стълба.

1. `\t` между етикета и стълба е знак за табулация, така че стълбовете се подреждат в
колона, вместо да започват веднага след всяко име с различна дължина.

{% include nav.html %}
