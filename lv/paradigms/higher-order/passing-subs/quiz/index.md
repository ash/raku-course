---
title: Viktorīna — Apakšprogrammu nodošana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
sub negate($n) { -$n }

sub apply(&f, $x) {
    f($x);
}

say apply(&negate, 7);
```

{:.quiz}
1 | -7
0 | 7
0 | 0
0 | &negate

{% include quiz.html %}

<div class="extended-explanation">

Nosauktu apakšprogrammu padod ar sigilu `&`, tāpēc `&negate` nodod `apply` pašu apakšprogrammu, nevis to izsauc. Iekšienē `f(7)` to izpilda, dodot `-7`.

</div>

{% include nav.html %}
