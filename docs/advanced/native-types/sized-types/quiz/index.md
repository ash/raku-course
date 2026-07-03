---
title: 'Quiz — Overflow'
---

{% include menu.html %}

What does the following program print?

```raku
my int8 $i = -128;
$i--;
say $i;
```

{:.quiz}
1 | 127
0 | -129
0 | -128
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

An `int8` holds values from `-128` to `127`. Wrapping happens at the bottom edge too: decrementing the smallest value cannot give `-129`, so it folds around to the largest value, `127`.

</div>

{% include nav.html %}
