---
title: Kvizo — La flua operatoro
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
(1..6) ==> grep(* > 3) ==> my @big;
say @big.elems;
```

{:.quiz}
0 | 6
1 | 3
0 | 4
0 | 2

{% include quiz.html %}

<div class="extended-explanation">

La fluo sendas `1..6` en `grep(* > 3)`, kiu konservas `4, 5, 6`, kaj metas ilin en `@big`. Do `@big.elems` estas `3`.

</div>

{% include nav.html %}
