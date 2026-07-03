---
title: Exercise ’Force eager evaluation‘
---

{% include menu.html %}

## Problem

The `eager` prefix does the opposite of `lazy`: it forces a list to be fully produced, so it is no longer lazy. Show the contrast with `.is-lazy`.

Print whether the infinite range `1 .. Inf` is lazy, then whether `eager 1..3` is lazy, and finally whether `lazy 1..3` is lazy. The results should be `True`, `False`, `True`.

## Example

The program prints:

```
True
False
True
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
