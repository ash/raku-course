---
title: Quiz — Arbor congruentiae
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

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

Unaquaeque tessera ramus nominatus arboris congruentiae fit. `<y>` in effectu tesseram `y` attingit, quae `4` congruit, itaque programma `｢4｣` imprimit.

</div>

{% include nav.html %}
