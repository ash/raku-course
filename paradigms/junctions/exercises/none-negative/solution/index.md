---
title: The solution of ’None negative‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say so none(3, 7, 2) < 0;
```

🦋 You can find the source code in the file [none-negative.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/none-negative.raku).

## Output

```
True
```

## Comments

1. A `none` junction is true when **no** value matches the comparison.

1. None of `3, 7, 2` is below zero, so the result is `True`. A single negative value would make it `False`.

{% include nav.html %}
