---
title: 'Solvo: Sumo per race'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say (1..50).race.map(* ** 2).grep(* %% 2).sum;
```

🦋 Vi povas trovi la fontkodon en la dosiero [parallel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/parallel-sum.raku).

## Eligo

```
22100
```

## Komentoj

1. `.race` plenumas la tutan ĉenon — kvadratigi ĉiun nombron kaj filtri por la paraj kvadratoj — paralele, kaj, malsame ol `.hyper`, ne promesas redoni la elementojn en ordo.

1. Tio estas en ordo ĉi tie, ĉar la fina paŝo estas sumo, kiu estas ord-sendependa: la paraj kvadratoj (`2²`, `4²`, …, `50²`) sumiĝas al `22100` sendepende de tio, en kiu ordo ili alvenas. Kiam vi nur kombinas la rezultojn (sumo, nombrado), `.race` estas la natura elekto kaj povas porti iom malpli da ŝarĝo ol `.hyper`.

{% include nav.html %}
