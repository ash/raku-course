---
title: 'Solutio: Modulum statisticum utere'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

Programma, `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Utrumque archivum fontem in directoria [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module) invenies.

## Exitus

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Commentarii

1. Unum `use Stats` *utrumque* subprogramma exportatum simul adducit — `use` omnia importat quae modulus `is export` notat, non unum solum nomen.

1. `mean` intra modulum `total` vocat. Programma illic `total` suo nomine numquam vocat, et tamen res operatur: subprogrammata moduli inter se niti possunt, et vocans sola nomina exportata videt.

1. Cum quattuor numeris ad `100` addentibus, medium est `100 / 4`, id est `25`.

{% include nav.html %}
