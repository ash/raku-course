---
title: Viktorīna — Plūsmas operators
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Plūsma nosūta `1..6` uz `grep(* > 3)`, kas patur `4, 5, 6`, un noglabā tos `@big`. Tāpēc `@big.elems` ir `3`.

</div>

{% include nav.html %}
