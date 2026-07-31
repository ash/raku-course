---
title: Quiz — Fluxus retroversus
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my @out <== map(* + 1) <== (10, 20, 30);
say @out;
```

{:.quiz}
1 | [11 21 31]
0 | [31 21 11]
0 | [30 20 10]
0 | [10 20 30]

{% include quiz.html %}

<div class="extended-explanation">

`<==` solam directionem in qua series scribitur mutat, non ordinem datorum. Fons `(10, 20, 30)` intro fluit — scopo a sinistra — et `map(* + 1)` unum unicuique elemento in loco addit, dans `[11 21 31]`. Fluxus retroversus elementa numquam invertit; ad id expresso `reverse` egeres.

</div>

{% include nav.html %}
