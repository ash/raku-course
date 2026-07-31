---
title: Kvizo — Redukto
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
say (10, 1, 2, 3).reduce(* - *);
```

{:.quiz}
1 | 4
0 | 8
0 | 16
0 | -4

{% include quiz.html %}

<div class="extended-explanation">

`reduce` faldas la liston de maldekstre dekstren, kaj la **unua** argumento de la bloko ĉiam estas la ĝisnuna rezulto — ĉi tie, la maldekstra operando de `-`. Do ĝi kalkulas `((10 - 1) - 2) - 3`, tio estas `9 - 2 - 3 = 4`. Faldi la alian direkton, `10 - (1 - (2 - 3))`, donus `8`, kaj adicii anstataŭ subtrahi donus `16`. Malsame ol `+`, subtraho dependas de la ordo, do la roloj de la du argumentoj vere gravas.

</div>

{% include nav.html %}
