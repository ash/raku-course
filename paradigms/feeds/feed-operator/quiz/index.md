---
title: 'Quiz — The feed operator'
---

{% include menu.html %}

What does the following program print?

```raku
(1..6) ==> grep(* > 3) ==> my @big;
say @big.elems;
```

{:.quiz}
0 | 6
1 | 3
0 | 4
0 | 2

{% include quiz.html %}

<div class="extended-explanation">

The feed sends `1..6` into `grep(* > 3)`, which keeps `4, 5, 6`, and stores them in `@big`. So `@big.elems` is `3`.

</div>

{% include nav.html %}
