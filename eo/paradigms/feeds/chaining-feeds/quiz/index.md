---
title: Kvizo — Fluoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
(10, 20, 30) ==> map(* + 5) ==> my @r;
say @r;
```

{:.quiz}
1 | [15 25 35]
0 | [10 20 30]
0 | [15]
0 | 35

{% include quiz.html %}

<div class="extended-explanation">

La fluo sendas la liston en `map(* + 5)`, kiu aldonas kvin al ĉiu elemento, kaj kolektas la rezulton en `@r`. Do `@r` estas `[15 25 35]`.

</div>

{% include nav.html %}
