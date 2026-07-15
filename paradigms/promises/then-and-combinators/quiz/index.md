---
title: 'Quiz — Combining promises'
---

{% include menu.html %}

What does the following program print?

```raku
my @jobs = (start { 2 }), (start { 3 });
say [*] await @jobs;
```

{:.quiz}
0 | 5
1 | 6
0 | (2 3)
0 | 23

{% include quiz.html %}

<div class="extended-explanation">

`await @jobs` returns the results of the two promises in order, `(2, 3)`. The reduce metaoperator `[*]` multiplies them, giving `6`.

</div>

{% include nav.html %}
