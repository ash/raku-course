---
title: The solution of ’Force eager evaluation‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1 .. Inf).is-lazy;
say (eager 1..3).is-lazy;
say (lazy 1..3).is-lazy;
```

🦋 You can find the source code in the file [force-eager.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/statement-prefixes/force-eager.raku).

## Output

```
True
False
True
```

## Comments

1. A range up to `Inf` cannot be computed all at once, so it is lazy: `.is-lazy` reports `True`.

1. The `eager` prefix forces a list to be produced immediately, so the result is no longer lazy — `.is-lazy` reports `False`. This is the direct counterpart of marking a list `lazy`.

1. Do not apply `eager` to an unbounded range: `eager 1 .. Inf` tries to compute every element at once, so the program simply hangs, consuming more and more memory until it is killed. `eager` is only safe on lists you know are finite.

1. The reverse also works: `lazy 1..3` marks even a short, finite range as lazy, so `.is-lazy` reports `True`. The prefix sets the laziness flag regardless of how small the list is — it does not have to be infinite to be lazy.

{% include nav.html %}
