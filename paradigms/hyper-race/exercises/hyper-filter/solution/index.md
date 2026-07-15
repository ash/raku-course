---
title: The solution of ’Hyper with a filter‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1..20).hyper.grep(* > 10).map(*²);
```

🦋 You can find the source code in the file [hyper-filter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-filter.raku).

## Output

```
(121 144 169 196 225 256 289 324 361 400)
```

## Comments

1. `*²` is just Raku’s superscript spelling of `* ** 2`: the `²` is a postfix power operator, so `*²` is a `WhateverCode` that squares its argument. Write `* ** 2` if you prefer.

1. `.hyper` parallelises the whole chain — the `grep` that keeps the numbers over `10` and the `map` that squares them — while preserving order.

1. Because the order is kept, the squares come back in the same sequence as their inputs (`11²`, `12²`, …, `20²`), giving `(121 144 169 196 225 256 289 324 361 400)`.

{% include nav.html %}
