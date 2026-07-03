---
title: 'Quiz — Sets'
---

{% include menu.html %}

What does the following program print?

```raku
say (set(1, 2) ∪ set(2, 3)).elems;
```

{:.quiz}
1 | 3
0 | 4
0 | 2
0 | 1

{% include quiz.html %}

<div class="extended-explanation">

The union collects every value from either set, but a set keeps each value only once. The two sets share `2`, so the union is `{1, 2, 3}` — three distinct elements.

</div>

{% include nav.html %}
