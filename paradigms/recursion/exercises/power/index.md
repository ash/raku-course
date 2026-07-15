---
title: Exercise ’Power‘
---

{% include menu.html %}

## Problem

Write a recursive subroutine `power($base, $exp)` that raises `$base` to the power `$exp` by multiplying — without using the `**` operator. The base case is `$exp == 0`, which gives `1`; otherwise the answer is `$base` times `power($base, $exp - 1)`. Print `power(2, 10)`.

## Example

The program prints:

```
1024
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
