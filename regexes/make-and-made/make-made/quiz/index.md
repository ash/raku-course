---
title: 'Quiz — make and made'
---

{% include menu.html %}

What does the following program print?

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

The inline block stores `$<number>.Int ** 2` on the match. The token captured `5`, converting it to the integer `5` and squaring it gives `25`, which `made` returns.

</div>

{% include nav.html %}
