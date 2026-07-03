---
title: The solution of ’Average operator‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub infix:<avg>($a, $b) {
    ($a + $b) / 2
}

say 4 avg 10;
```

🦋 You can find the source code in the file [average-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/average-operator.raku).

## Output

```
7
```

## Comments

1. The operator is declared as `infix:<avg>`, so it is written between its two operands, just like `+` or `~`.

1. The body adds the two operands and divides by two. For `4` and `10` the result is `7`.

{% include nav.html %}
