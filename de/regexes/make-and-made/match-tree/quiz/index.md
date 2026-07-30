---
title: 'Quiz — Der Match-Baum'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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

Jedes Token wird zu einem benannten Zweig des Match-Baums. `<y>` auf dem Ergebnis erreicht das Token `y`, das `4` getroffen hat, das Programm gibt also `｢4｣` aus.

</div>

{% include nav.html %}
