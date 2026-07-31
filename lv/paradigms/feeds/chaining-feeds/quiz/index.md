---
title: Viktorīna — Plūsmas
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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

Plūsma nosūta sarakstu uz `map(* + 5)`, kas katram elementam pieskaita piecus, un savāc rezultātu `@r`. Tātad `@r` ir `[15 25 35]`.

</div>

{% include nav.html %}
