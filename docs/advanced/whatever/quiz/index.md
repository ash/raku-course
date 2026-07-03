---
title: 'Quiz — The Whatever star'
---

{% include menu.html %}

What does the following program print?

```raku
my @a = 5, 6, 7, 8, 9;
say @a[*-2];
```

{:.quiz}
1 | 8
0 | 7
0 | 9
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

In a subscript, the bare `*` stands for the number of elements — here `5`. So `*-2` is index `3`, and the element at index `3` (counting from zero) is `8`.

</div>

{% include nav.html %}
