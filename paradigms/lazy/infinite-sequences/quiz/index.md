---
title: 'Quiz — Lazy sequences'
---

{% include menu.html %}

What does the following program print?

```raku
say (2, 4, 6 ... *)[5];
```

{:.quiz}
0 | 10
1 | 12
0 | 14
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

`(2, 4, 6 ... *)` is the infinite sequence of even numbers. Counting from index zero, element `5` is the sixth even number, `12`. Only as many elements as needed are computed, thanks to laziness.

</div>

{% include nav.html %}
