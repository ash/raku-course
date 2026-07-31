---
title: 'Solutio: Summa cum race'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

```raku
say (1..50).race.map(* ** 2).grep(* %% 2).sum;
```

🦋 Inveni codicem fontem in archivo [parallel-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/parallel-sum.raku).

## Exitus

```
22100
```

## Commentarii

1. `.race` totam catenam — unumquemque numerum quadrare et quadrata paria filtrare — parallele currit, et, dissimile `.hyper`, elementa ordine reddere non promittit.

1. Hoc hic satis est quia gradus ultimus summa est, quae ab ordine independens est: quadrata paria (`2²`, `4²`, …, `50²`) `22100` efficiunt quocumque ordine adveniunt. Cum effectus tantum componis (summa, numerus), `.race` optio naturalis est et paulo minus oneris quam `.hyper` ferre potest.

{% include nav.html %}
