---
title: The solution of ’Soft reciprocal‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub reciprocal($n) {
    fail 'no reciprocal of zero' if $n == 0;
    return 1 / $n;
}

say reciprocal(4);
say reciprocal(0) // 'undefined';
```

🦋 You can find the source code in the file [soft-divide.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/soft-divide.raku).

## Output

```
0.25
undefined
```

## Comments

1. `reciprocal(4)` returns `1 / 4`, that is `0.25`, normally.

1. `reciprocal(0)` calls `fail`, so it returns a `Failure`, which is undefined. The `//` operator returns its right-hand side whenever the left side is undefined, so we get the fallback `undefined`.

1. Using `//` counts as handling the failure: it tests for definedness without using the value, so the `Failure` stays soft and is never thrown as a real exception.

{% include nav.html %}
