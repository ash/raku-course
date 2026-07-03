---
title: 'Quiz — Pointy blocks'
---

{% include menu.html %}

What does the following program print?

```raku
(-> $a, $b { $a * $b })(3, 4).say
```

{:.quiz}
1 | 12
0 | 7
0 | 34
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

A pointy block can list several parameters: `-> $a, $b` takes two. Here it is not stored in a variable at all — it is wrapped in parentheses and called straight away with `(3, 4)`, binding `$a` to `3` and `$b` to `4`. The block multiplies them to give `12`, and the postfix `.say` prints it.

</div>

{% include nav.html %}
