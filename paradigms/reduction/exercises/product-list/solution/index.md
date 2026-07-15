---
title: The solution of ’Product of a list‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say [*] 1..6;
```

🦋 You can find the source code in the file [product-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/product-list.raku).

## Output

```
720
```

## Comments

1. `[*]` inserts `*` between every element of the range, multiplying them all.

1. `1 * 2 * 3 * 4 * 5 * 6` is `720` — the same as the factorial of `6`.

{% include nav.html %}
