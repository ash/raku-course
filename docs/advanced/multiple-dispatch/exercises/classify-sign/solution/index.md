---
title: The solution of ’Classify the size‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 You can find the source code in the file [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Output

```
small
medium
large
```

## Comments

1. All three candidates take a single `Int`, so without the `where` clauses they would clash. The conditions on the first two make them distinct, and the third is the catch-all.

1. The `where` clauses test `$n.abs`, so the magnitude alone decides the result and the sign is ignored. `size(7)` matches the first candidate (`small`), while `size(-250)` has an absolute value of `250`, which fails both conditions and falls through to the catch-all (`large`).

1. The candidates are tested from the most specific to the most general — exactly the order in which they are written here.

{% include nav.html %}
