---
title: The solution of ’Percent-of operator‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub infix:<percent-of>($p, $whole) {
    $whole * $p / 100
}

say 20 percent-of 150;
```

🦋 You can find the source code in the file [percent-of-operator.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/user-defined-operators/percent-of-operator.raku).

## Output

```
30
```

## Comments

1. The operator takes the percentage `$p` as its left operand and the whole amount `$whole` as its right operand.

1. Multiplying `$whole` by `$p` and dividing by `100` gives the requested part: `150 * 20 / 100` is `30`.

{% include nav.html %}
