---
title: 'Quiz — Junctions'
---

{% include menu.html %}

What does the following program print?

```raku
say so 4 == all(2, 4, 6);
```

{:.quiz}
0 | True
1 | False
0 | all(2, 4, 6)
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

An `all` junction is true only when **every** value matches. The test `4 == all(2, 4, 6)` asks whether `4` equals `2` and `4` and `6` — which it does not, so the result is `False`.

Curious what *could* make it `True`? The left side would have to equal each of `2`, `4`, and `6` at once. No single number can — but a junction on the left can: an `any` junction that **includes all three** of those values works, because then every one of the comparisons succeeds. The two sides need not be the same size — the left may carry extra values:

```raku
say so any(2, 4, 6, 8) == all(2, 4, 6); # True
say so any(2, 4)       == all(2, 4, 6); # False
```

The first is `True` because `any(2, 4, 6, 8)` still equals `2`, `4`, and `6` (the extra `8` is harmless). The second is `False` because the left side has no `6`, so `left == 6` fails.

</div>

{% include nav.html %}
