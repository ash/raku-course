---
title: Exercise ’A native array‘
---

{% include menu.html %}

## Problem

The natural use for a sized native type is a compact array of bytes. Declare a `uint8` array holding the values `100`, `200`, and `255` — each fits in a single byte — and print the sum of its elements.

Note that the elements stay within `0..255`, but their sum does not have to: `.sum` returns an ordinary `Int`.

## Example

The program prints:

```
555
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
