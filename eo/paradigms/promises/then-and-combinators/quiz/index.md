---
title: Kvizo — Kombini promesojn
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` redonas la rezultojn de la du promesoj laŭvice, `(2, 3)`. La redukta metaoperatoro `[*]` multiplikas ilin, donante `6`.

</div>

{% include nav.html %}
