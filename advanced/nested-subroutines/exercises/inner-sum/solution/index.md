---
title: The solution of ’An inner sum‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub compute {
    sub add($x, $y) {
        $x + $y;
    }

    add(2, 3) + add(4, 5);
}

say compute;
```

🦋 You can find the source code in the file [inner-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/inner-sum.raku).

## Output

```
14
```

## Comments

1. The nested `add` is used twice inside `compute`: `add(2, 3)` is `5` and `add(4, 5)` is `9`.

1. Their sum, `14`, is the value returned by `compute`.

{% include nav.html %}
