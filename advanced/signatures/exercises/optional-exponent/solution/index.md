---
title: The solution of ’An optional exponent‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 You can find the source code in the file [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Output

```
25
125
```

## Comments

1. The `?` after `$exp` makes it optional, so `power` can be called with just the base.

1. When `$exp` is omitted it is undefined, and `//` supplies the fallback `2`, so `power(5)` squares the base to `25`. Given an exponent, as in `power(5, 3)`, that value is used instead, giving `125`.

{% include nav.html %}
