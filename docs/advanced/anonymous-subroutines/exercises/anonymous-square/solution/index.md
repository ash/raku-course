---
title: The solution of ’An anonymous square‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say (1, 2, 3).map(sub ($x) { $x * $x });
```

🦋 You can find the source code in the file [anonymous-square.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/anonymous-square.raku).

## Output

```
(1 4 9)
```

## Comments

1. The `sub ($x) { $x * $x }` has no name and is never stored in a variable — it is handed straight to `map` as its argument.

1. `map` applies it to each element of `1, 2, 3`, squaring them into `(1 4 9)`. Passing an anonymous subroutine inline like this is the most common reason to write one.

{% include nav.html %}
