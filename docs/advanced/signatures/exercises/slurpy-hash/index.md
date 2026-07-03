---
title: Exercise ’Slurpy named arguments‘
---

{% include menu.html %}

## Problem

Write a subroutine `describe` that takes a required positional name and then collects any number of named arguments into a slurpy hash (`*%opts`). It should return a string of the form `name: key=value, key=value, ...`, listing every option with its keys in alphabetical order.

Call it as `describe('Anna', colour => 'red', size => 5)` and print the result.

## Example

The program prints:

```
Anna: colour=red, size=5
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
