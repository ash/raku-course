---
title: The solution of ’Every factorial at once‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
say [\*] 1..6;
```

🦋 You can find the source code in the file [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/factorial.raku).

## Output

```
(1 2 6 24 120 720)
```

## Comments

1. The backslash inside the brackets turns `[*]` into a *triangular* reduction. Instead of collapsing the list to a single value, it keeps every partial product: `1`, then `1*2`, then `1*2*3`, and so on.

1. Each partial product `1*2*...*k` is exactly _k!_, so the result is the list of factorials of `1` through `6`. A plain `[*] 1..6` would have given only the last of these, `720`.

{% include nav.html %}
