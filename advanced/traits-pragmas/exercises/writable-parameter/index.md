---
title: Exercise ’A writable parameter‘
---

{% include menu.html %}

## Problem

By default a subroutine’s parameters are read-only, so a routine cannot change the caller’s variable. The `is rw` trait removes that restriction.

Write a subroutine `double` whose single parameter is marked `is rw`, and which doubles it in place (`$n *= 2`). Call it on a variable holding `21`, then print the variable to show that it has become `42`.

## Example

The program prints:

```
42
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
