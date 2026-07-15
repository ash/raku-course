---
title: 'Quiz — The backward feed'
---

{% include menu.html %}

What does the following program print?

```raku
my @out <== map(* + 1) <== (10, 20, 30);
say @out;
```

{:.quiz}
1 | [11 21 31]
0 | [31 21 11]
0 | [30 20 10]
0 | [10 20 30]

{% include quiz.html %}

<div class="extended-explanation">

`<==` changes only the direction in which the pipeline is written, not the order of the data. The source `(10, 20, 30)` flows in — target on the left — and `map(* + 1)` adds one to each element in place, giving `[11 21 31]`. A backward feed never reverses the elements; for that you would need an explicit `reverse`.

</div>

{% include nav.html %}
