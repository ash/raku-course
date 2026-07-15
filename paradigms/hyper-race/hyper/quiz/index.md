---
title: 'Quiz — hyper'
---

{% include menu.html %}

What does the following program print?

```raku
say (1..4).hyper.map(* ** 2);
```

{:.quiz}
0 | (16 9 4 1)
1 | (1 4 9 16)
0 | 30
0 | (1 2 3 4)

{% include quiz.html %}

<div class="extended-explanation">

`.hyper` spreads the `map` across threads but keeps the results in their original order, so it behaves just like an ordinary `map` — squaring each element gives `(1 4 9 16)`.

</div>

{% include nav.html %}
