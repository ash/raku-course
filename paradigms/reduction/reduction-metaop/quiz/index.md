---
title: 'Quiz — The reduction metaoperator'
---

{% include menu.html %}

What does the following program print?

```raku
say [min] 8, 3, 5, 1;
```

{:.quiz}
0 | 17
1 | 1
0 | 8
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

`[min]` reduces the list with the `min` operator, comparing the elements pairwise and keeping the smallest. The smallest of `8, 3, 5, 1` is `1`.

</div>

{% include nav.html %}
