---
title: 'Quiz — Hyper and cross'
---

{% include menu.html %}

What does the following program print?

```raku
say (1, 2, 3) »+» 10;
```

{:.quiz}
1 | (11 12 13)
0 | (11 2 3)
0 | 16
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

The hyper meta-operator `»+»` applies `+` to every element. With a single value `10` on the right, that value is stretched across the whole list, so each element gains `10`: `(11 12 13)`. (A reduction `[+]` would instead collapse the list to the single sum `6`.)

</div>

{% include nav.html %}
