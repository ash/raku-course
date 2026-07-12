---
title: Exercise ’A number with proto‘
---

{% include menu.html %}

## Problem

Write a grammar that parses a `number`, which may be either a decimal integer (one or more digits) or a hexadecimal literal (`0x` followed by hex digits `0`–`9`, `a`–`f`). Use a **proto token** with two `:sym<…>` variants, `dec` and `hex`. Parse `'0xff'` and print whether it succeeded.

## Example

The program prints:

```
True
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
