---
title: 'Solutio: Solum integri'
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
my Int $cars;

$cars = 250.7.Int;
say $cars;
say $cars.WHAT;
```

🦋 Inveni codicem fontem in archivo [integers-only.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/integers-only.raku).

## Exitus

```
250
(Int)
```

## Commentarii

1. Restrictio typi `Int` in `my Int $cars` facit ut continens quemlibet valorem qui non est numerus integer reiciat. Assignatio directa `250.7` (valor `Rat`) error tempore compilationis esset.

1. Methodus `.Int` vocata in valore rationali `250.7` eum ad numerum integrum `250` convertit, partem fractionalem abiciens. Valor conversus continenti convenit. Cura ne hoc cum rotundatione confundas.

1. Pseudo-methodus `.WHAT` confirmat valorem in continenti servatum typi `Int` esse.

{% include nav.html %}
