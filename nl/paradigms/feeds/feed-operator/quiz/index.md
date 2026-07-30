---
title: 'Quiz — De feed-operator'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

De feed stuurt `1..6` naar `grep(* > 3)`, die `4, 5, 6` houdt en ze in `@big` bewaart. Dus `@big.elems` is `3`.

</div>

{% include nav.html %}
