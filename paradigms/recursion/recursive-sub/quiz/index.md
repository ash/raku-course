---
title: 'Quiz — Recursion'
---

{% include menu.html %}

What does the following program print?

```raku
sub sum($n) {
    $n <= 0 ?? 0 !! $n + sum($n - 1);
}

say sum(4);
```

{:.quiz}
0 | 4
1 | 10
0 | 24
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

`sum(4)` is `4 + sum(3)`, which unwinds to `4 + 3 + 2 + 1`, that is `10`. The recursion stops at the base case, when `$n` reaches `0`.

</div>

{% include nav.html %}
