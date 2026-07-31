---
title: 'Solutio: Valor secundus maximus'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Inveni codicem fontem in archivo [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Exitus

```
7
```

## Commentarii

1. Indicem in `Set` per `.Set` vertere `9` duplicatum abicit, quoniam
copia unumquemque valorem semel tantum tenet.

1. `.keys` valores distinctos reddit — adhuc `Int`, non catenas — itaque simplex
`.sort` eos numerice ordinat. Secundus maximus tunc uno loco ante
finem est, `[*-2]`.

{% include nav.html %}
