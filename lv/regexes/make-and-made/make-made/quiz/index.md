---
title: Viktorīna — make un made
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

Iekšējais bloks saglabā uz sakritības `$<number>.Int ** 2`. Marķieris satvēra `5`; pārveidojot to par veselu skaitli `5` un kāpinot kvadrātā, iznāk `25`, ko `made` atgriež.

</div>

{% include nav.html %}
