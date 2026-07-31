---
title: 'Solvo: Kalkuli la unikajn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Vi povas trovi la fontkodon en la dosiero [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Eligo

```
7
```

## Komentoj

1. Transdoni la tabelon al `set` konstruas aron el ĝiaj valoroj. Ĉar aro konservas nur distingajn valorojn, la ripetitaj nombroj kunfandiĝas en unu.

1. La metodo `elems` tiam redonas la nombron de distingaj valoroj, kiu estas `7`.

{% include nav.html %}
