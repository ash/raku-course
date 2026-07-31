---
title: 'Solutio: Numeros magnos fluere fac'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
(1..10) ==> grep(* > 5) ==> my @big;
say @big;
```

🦋 Inveni codicem fontem in archivo [feed-big-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/feeds/feed-big-numbers.raku).

## Exitus

```
[6 7 8 9 10]
```

## Commentarii

1. Fluxus `1..10` in `grep` mittit, quod numeros maiores quam `5` servat.

1. Effectus in `@big` fluit, scopum qui fluxum finit.

{% include nav.html %}
