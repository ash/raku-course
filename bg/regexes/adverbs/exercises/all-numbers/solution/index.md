---
title: 'Решение: Всички числа'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @numbers = 'x=5, y=10, z=15' ~~ m:g/\d+/;
say @numbers.map(*.Str).join('+');
```

🦋 Намерете програмата във файла [all-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/adverbs/all-numbers.raku).

## Изход

```
5+10+15
```

## Коментари

1. `\d+` съпоставя цяла поредица от цифри, а `:g` събира всяка такава поредица — тук `5`, `10` и `15`.

1. Всяко съвпадение е обект на съвпадението, така че `.map(*.Str)` ги превръща в обикновени низове, преди да бъдат свързани с `+`.

{% include nav.html %}
