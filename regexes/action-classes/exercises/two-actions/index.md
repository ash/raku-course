---
title: Exercise ’One grammar, two actions‘
---

{% include menu.html %}

## Problem

One grammar can be paired with different action classes to produce different results. Write a single grammar that parses two numbers separated by a comma, as in `'10,20'`. Write **two** action classes: one whose `TOP` makes their **sum**, another whose `TOP` makes their **difference** (first minus second). Parse `'10,20'` with each action class in turn and print both results.

## Example

The program prints:

```
30
-10
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
