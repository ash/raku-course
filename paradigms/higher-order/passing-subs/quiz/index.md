---
title: 'Quiz — Passing subroutines'
---

{% include menu.html %}

What does the following program print?

```raku
sub negate($n) { -$n }

sub apply(&f, $x) {
    f($x);
}

say apply(&negate, 7);
```

{:.quiz}
1 | -7
0 | 7
0 | 0
0 | &negate

{% include quiz.html %}

<div class="extended-explanation">

A named subroutine is passed with the `&` sigil, so `&negate` hands the subroutine itself to `apply` rather than calling it. Inside, `f(7)` runs it, giving `-7`.

</div>

{% include nav.html %}
