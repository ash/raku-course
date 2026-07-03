---
title: 'Quiz — Contexts'
---

{% include menu.html %}

What does the following program print?

```raku
my @a = 10, 20, 30;
say +@a;
```

{:.quiz}
0 | 60
1 | 3
0 | 10
0 | 10 20 30

{% include quiz.html %}

<div class="extended-explanation">

The `+` prefix forces numeric context. For an array, the numeric value is its number of elements, so `+@a` is `3`, not the sum. Use `~` for string context (`10 20 30`) or `[+]` to actually add the elements.

</div>

{% include nav.html %}
