---
title: Exercise ’A custom trait‘
---

{% include menu.html %}

## Problem

A custom trait can take an argument, not just be present or absent. Write a trait `is role(...)` that accepts a string and records, in a hash keyed by the subroutine’s name, the role assigned to that subroutine.

Apply `is role('admin')` to a subroutine `login`, then print the role stored for `login`.

## Example

The program prints:

```
admin
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
