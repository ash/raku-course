---
title: 'Solutio: Quadrata'
---

{% include menu.html %}

Hic est possibilis solutio ad munus.

## Codex

```raku
my @squares = gather for 1..6 {
    take $_ ** 2 if $_ %% 2;
};

say @squares;
```

🦋 Inveni codicem fontem in archivo [squares.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/gather-take/squares.raku).

## Exitus

```
[4 16 36]
```

## Commentarii

1. Custos `if $_ %% 2` decernit *num* capere, et `$_ ** 2` decernit *quid* capere. Tantum numeri pares `2`, `4`, `6` custodem transeunt.

1. Eorum quadrata `4`, `16`, `36` sunt soli valores ad `take` traditi, ergo `gather` exacte illos colligit. Filtrationem et transformationem simul in uno `take` facere est aliquid quod simplex `map` tam nitide exprimere non potest.

{% include nav.html %}
