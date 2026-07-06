---
title: Exercise ’Find a method‘
---

{% include menu.html %}

## Problem

Define a class `Animal` with a method `speak`, and a class `Dog` that inherits from `Animal` but adds no methods of its own. Using a meta-method on `Dog`, print whether `Dog` has a method named `speak` (a plain `True` or `False`). This shows that `find_method` looks along the inheritance chain, not just at the class’s own methods.

## Example

The program prints:

```
True
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
