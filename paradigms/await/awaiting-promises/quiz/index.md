---
title: 'Quiz — await'
---

{% include menu.html %}

What does the following program print?

```raku
my $p = start { 8 * 8 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 8
1 | 64
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`await` waits for the single promise to finish and returns its result. The block computes `8 * 8`, so `await $p` is `64`.

</div>

{% include nav.html %}
