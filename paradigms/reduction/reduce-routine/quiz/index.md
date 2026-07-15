---
title: 'Quiz — Reduction'
---

{% include menu.html %}

What does the following program print?

```raku
say (10, 1, 2, 3).reduce(* - *);
```

{:.quiz}
1 | 4
0 | 8
0 | 16
0 | -4

{% include quiz.html %}

<div class="extended-explanation">

`reduce` folds the list left to right, and the **first** argument of the block is always the result so far — here, the left operand of `-`. So it computes `((10 - 1) - 2) - 3`, that is `9 - 2 - 3 = 4`. Folding the other way, `10 - (1 - (2 - 3))`, would give `8`, and adding instead of subtracting would give `16`. Unlike `+`, subtraction depends on order, so the roles of the two arguments really matter.

</div>

{% include nav.html %}
