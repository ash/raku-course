---
title: 'Quiz — The match tree'
---

{% include menu.html %}

What does the following program print?

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

Each token becomes a named branch of the match tree. `<y>` on the result reaches the `y` token, which matched `4`, so the program prints `｢4｣`.

</div>

{% include nav.html %}
