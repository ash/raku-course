---
title: 'Solvo: Uzi statistikan modulon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

La programo, `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Vi povas trovi ambaŭ fontdosierojn en la dosierujo [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module).

## Eligo

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Komentoj

1. Unu sola `use Stats` enportas *ambaŭ* eksportitajn subrutinojn samtempe — `use` importas ĉion, kion la modulo markas per `is export`, ne nur unu nomon.

1. `mean` vokas `total` ene de la modulo. La programo neniam vokas `total` propranome tie, tamen ĝi ankoraŭ funkcias: la subrutinoj de modulo povas dependi unu de la alia, kaj la vokanto vidas nur la eksportitajn nomojn.

1. Kun kvar nombroj sumiĝantaj al `100`, la mezumo estas `100 / 4`, kio estas `25`.

{% include nav.html %}
