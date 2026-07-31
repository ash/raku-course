---
title: 'Kvizo — La operatoro `...`'
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
say 1, 3, 9 ... 81;
```

{:.quiz}
1 | (1 3 9 27 81)
0 | (1 3 9 81)
0 | (1 3 5 7 ... 81)
0 | (3 9 27)

{% include quiz.html %}

<div class="extended-explanation">

Kun *tri* komencaj valoroj, `...` rigardas la proporcion inter ili: `1, 3, 9` ĉiu triobliĝas, do ĝi daŭrigas geometrie kiel `27, 81`. (Du komencaj valoroj anstataŭe starigus aritmetikan paŝon.)

</div>

{% include nav.html %}
