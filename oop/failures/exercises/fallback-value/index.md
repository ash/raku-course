---
title: Exercise ’A fallback value‘
---

{% include menu.html %}

## Problem

Write a subroutine `get` that returns its argument, but calls `fail` with the message `bad` when the argument is `0`.

Using the defined-or operator `//` to provide a fallback of `default`, print the result of `get(5)` and then of `get(0)`.

## Example

The program prints:

```
5
default
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
