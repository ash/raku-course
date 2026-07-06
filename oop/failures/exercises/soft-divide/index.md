---
title: Exercise ’Soft reciprocal‘
---

{% include menu.html %}

## Problem

Write a subroutine `reciprocal` that returns `1` divided by its argument, but uses `fail` with the message `no reciprocal of zero` when the argument is `0`.

Print the result of `reciprocal(4)`. Then print the result of `reciprocal(0)`, but use the `//` operator to fall back to the string `undefined` when the call fails, instead of checking `.defined` yourself.

## Example

The program prints:

```
0.25
undefined
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
