---
title: 'Quiz — The sequence operator'
---

{% include menu.html %}

What does the following program print?

```raku
say (3, 6 ... 15);
```

{:.quiz}
0 | (3 6)
0 | (3 6 15)
1 | (3 6 9 12 15)
0 | (3 6 9 12 15 18)

{% include quiz.html %}

<div class="extended-explanation">

From `3, 6` the operator infers a step of `+3` and continues until it reaches the endpoint `15`: `3, 6, 9, 12, 15`.

</div>

{% include nav.html %}
