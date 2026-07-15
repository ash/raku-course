---
title: Exercise ’Sum of digits‘
---

{% include menu.html %}

## Problem

Write a recursive subroutine `sum-digits` that returns the sum of the decimal digits of a non-negative integer. For a number below `10` the answer is the number itself; otherwise add the last digit (`$n % 10`) to the digit sum of the rest (`$n div 10`).

Print `sum-digits(1234)`.

## Example

The program prints:

```
10
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
