---
title: Viktorīna — Sakritības koks
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
grammar Point {
    token TOP { <x> ',' <y> }
    token x   { \d+ }
    token y   { \d+ }
}

say Point.parse('3,4')<y>;
```

{:.quiz}
0 | ｢3｣
1 | ｢4｣
0 | ｢3,4｣
0 | ｢y｣

{% include quiz.html %}

<div class="extended-explanation">

Katrs marķieris kļūst par nosauktu sakritību koka zaru. `<y>` uz rezultāta sasniedz marķieri `y`, kas sakrita ar `4`, tāpēc programma izdrukā `｢4｣`.

</div>

{% include nav.html %}
