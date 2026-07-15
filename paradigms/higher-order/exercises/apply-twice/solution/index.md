---
title: The solution of ’Apply twice‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub twice(&f, $x) {
    f(f($x));
}

say twice(* * 3, 2);
```

🦋 You can find the source code in the file [apply-twice.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/higher-order/apply-twice.raku).

## Output

```
18
```

## Comments

1. The `&f` parameter receives a subroutine; the inner `f($x)` is fed into the outer `f(...)`.

1. Tripling `2` gives `6`, and tripling again gives `18`.

{% include nav.html %}
