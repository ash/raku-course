---
title: 'Quiz — De matchboom'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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

Elk token wordt een benoemde tak van de matchboom. `<y>` op het resultaat bereikt het token `y`, dat `4` matchte, dus drukt het programma `｢4｣` af.

</div>

{% include nav.html %}
