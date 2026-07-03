---
title: The solution of ’Average of an array‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @data = 10, 20, 30, 40;

say ([+] @data) / @data.elems;
```

🦋 You can find the source code in the file [sum-of-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/sum-of-array.raku).

## Output

```
25
```

## Comments

1. The reduction meta-operator `[+]` places the `+` operator between all the elements of `@data`, so `[+] @data` is equivalent to `10 + 20 + 30 + 40`, that is, `100`. The parentheses are needed so that the reduction happens before the division.

1. Dividing the sum by `@data.elems`, the number of elements, gives the average `25`. Had the result not divided evenly, Raku would have produced an exact `Rat` rather than rounding.

{% include nav.html %}
