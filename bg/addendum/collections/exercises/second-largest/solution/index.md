---
title: 'Решение: Втората по големина стойност'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Намерете програмата във файла [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Изход

```
7
```

## Коментари

1. Превръщането на списъка в `Set` чрез `.Set` изхвърля повтарящата се `9`, защото
множеството пази всяка стойност само веднъж.

1. `.keys` връща различните стойности — все още `Int`, а не низове, — така че обикновен
`.sort` ги подрежда числово. Втората по големина тогава е една позиция преди края:
`[*-2]`.

{% include nav.html %}
