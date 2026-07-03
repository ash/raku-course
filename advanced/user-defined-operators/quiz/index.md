---
title: 'Quiz — Defining an operator'
---

{% include menu.html %}

What does the following program print?

```raku
sub infix:<times>($a, $b) { $a * $b }

say 6 times 7;
```

{:.quiz}
1 | 42
0 | 67
0 | times
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

`infix:<times>` defines a new operator written between its two operands. Its body multiplies them, so `6 times 7` evaluates to `42` — an operator is just a subroutine with a special name.

</div>

{% include nav.html %}
