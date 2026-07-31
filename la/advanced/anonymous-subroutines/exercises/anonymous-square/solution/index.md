---
title: 'Solutio: Quadratum anonymum'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 Inveni codicem fontem in archivo [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Exitus

```
(1 4 9)
```

## Commentarii

1. `sub ($x) { $x * $x }` nomen non habet et numquam in variabili servatur -- recta ad `map` ut argumentum traditur.

1. `map` eam ad quodque elementum `1, 2, 3` applicat, ea in quadrata `(1 4 9)` convertens. Subroutinam anonymam sic in linea tradere causa usitatissima est cur talis scribatur.

{% include nav.html %}
