---
title: The solution of ’Exactly one‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say so one(1, 2, 3) == 2;
```

🦋 You can find the source code in the file [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Output

```
True
```

## Comments

1. A `one` junction is true only when **exactly one** value matches the comparison.

1. Exactly one of `1, 2, 3` equals `2`, so the result is `True`. If two of them matched (or none did), it would be `False`. The `so` collapses the junction to a plain Boolean.

{% include nav.html %}
