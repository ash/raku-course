---
title: The solution of ’Force the order‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say 2 ** (3 + 1);
```

🦋 You can find the source code in the file [force-the-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/force-the-order.raku).

## Output

```
16
```

## Comments

1. Without the parentheses, `**` would bind tighter than `+`, giving `(2 ** 3) + 1 = 9`.

1. The parentheses raise the precedence of the addition, so `3 + 1` is computed first and the expression becomes `2 ** 4`, which is `16`. Parentheses always let you override the default precedence.

{% include nav.html %}
