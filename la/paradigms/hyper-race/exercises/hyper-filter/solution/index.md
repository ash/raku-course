---
title: 'Solutio: hyper cum filtro'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say (1..20).hyper.grep(* > 10).map(*²);
```

🦋 Inveni codicem fontem in archivo [hyper-filter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-filter.raku).

## Exitus

```
(121 144 169 196 225 256 289 324 361 400)
```

## Commentarii

1. `*²` mere modus est quo Raku `* ** 2` per exponentem superscriptum scribit: `²` operator potestatis postpositus est, itaque `*²` est `WhateverCode` quod argumentum suum quadrat. Scribe `* ** 2` si mavis.

1. `.hyper` totam catenam parallelizat — et `grep` quod numeros supra `10` servat et `map` quod eos quadrat — dum ordinem servat.

1. Quia ordo servatur, quadrata eadem serie ac ingressus eorum redeunt (`11²`, `12²`, …, `20²`), dantia `(121 144 169 196 225 256 289 324 361 400)`.

{% include nav.html %}
