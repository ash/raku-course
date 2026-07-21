---
title: The solution of ’Transpose a matrix‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 You can find the source code in the file [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Output

```
((1 4) (2 5) (3 6))
```

## Comments

1. The zip metaoperator `Z` pairs up elements by position. Used as a reduction
`[Z]`, it zips all the rows together, turning columns into rows — exactly a
transpose.

{% include nav.html %}
