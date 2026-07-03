---
title: 'Quiz — gist and Str'
---

{% include menu.html %}

What does the following program print?

```raku
my @a = 1, 2, 3;
say @a.Str;
```

{:.quiz}
0 | [1 2 3]
1 | 1 2 3
0 | (1 2 3)
0 | 1, 2, 3

{% include quiz.html %}

<div class="extended-explanation">

`.Str` gives the plain string form, where the elements are simply joined by spaces with no brackets: `1 2 3`. The bracketed form `[1 2 3]` is what `.gist` (and therefore `say @a`) would produce.

</div>

{% include nav.html %}
