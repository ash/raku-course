---
title: 'Quiz — Promises'
---

{% include menu.html %}

What does the following program print?

```raku
my $p = start { 100 / 4 };
say await $p;
```

{:.quiz}
0 | Promise
0 | 100
1 | 25
0 | True

{% include quiz.html %}

<div class="extended-explanation">

`start` runs the block in the background and returns a promise. `await` waits for it and returns the block’s result, `100 / 4`, which is `25`.

</div>

{% include nav.html %}
