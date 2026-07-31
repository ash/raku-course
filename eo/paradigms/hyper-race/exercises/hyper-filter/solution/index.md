---
title: 'Solvo: hyper kun filtrilo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (1..20).hyper.grep(* > 10).map(*²);
```

🦋 Vi povas trovi la fontkodon en la dosiero [hyper-filter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-filter.raku).

## Eligo

```
(121 144 169 196 225 256 289 324 361 400)
```

## Komentoj

1. `*²` estas simple la superskribita skribmaniero de Raku por `* ** 2`: la `²` estas postfiksa potenca operatoro, do `*²` estas `WhateverCode`, kiu kvadratigas sian argumenton. Skribu `* ** 2`, se vi preferas.

1. `.hyper` paraleligas la tutan ĉenon — la `grep`, kiu konservas la nombrojn super `10`, kaj la `map`, kiu kvadratigas ilin — konservante la ordon.

1. Ĉar la ordo estas konservata, la kvadratoj revenas en la sama sinsekvo kiel iliaj enigoj (`11²`, `12²`, …, `20²`), donante `(121 144 169 196 225 256 289 324 361 400)`.

{% include nav.html %}
