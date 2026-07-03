---
title: The solution of ’Absolute value‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
multi sub abs-value(Int $n where $n < 0) { -$n }
multi sub abs-value(Int $n)              { $n }

say abs-value(-7);
say abs-value(4);
```

🦋 You can find the source code in the file [absolute-value.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/absolute-value.raku).

## Output

```
7
4
```

## Comments

1. The first candidate matches only negative numbers and returns the negated value, which is positive.

1. Every other number — zero and the positives — goes to the second candidate, which returns the value unchanged.

{% include nav.html %}
