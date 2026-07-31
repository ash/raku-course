---
title: Kvizo — hyper
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
say (1..4).hyper.map(* ** 2);
```

{:.quiz}
0 | (16 9 4 1)
1 | (1 4 9 16)
0 | 30
0 | (1 2 3 4)

{% include quiz.html %}

<div class="extended-explanation">

`.hyper` disvastigas la `map` trans fadenojn, sed tenas la rezultojn en ilia originala ordo, do ĝi kondutas ĝuste kiel ordinara `map` — kvadratigi ĉiun elementon donas `(1 4 9 16)`.

</div>

{% include nav.html %}
