---
title: Exercise ’Classify the size‘
---

{% include menu.html %}

## Problem

Write three multi-subroutines named `size`, all taking an `Int`, that return `'small'`, `'medium'`, or `'large'`. Classify by the *magnitude* of the number, ignoring its sign: numbers whose absolute value is below `10` are small, below `100` are medium, and anything else is large. Use a `where` clause on the first two candidates and let the third be the catch-all.

Print the result of `size(7)`, `size(30)`, and `size(-250)`.

## Example

The program prints:

```
small
medium
large
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
