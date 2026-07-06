---
title: Exercise ’Match the type‘
---

{% include menu.html %}

## Problem

Built-in errors have their own exception types, which you can match on. Write a block that computes `1 / 0` and tries to use the result, which throws a `X::Numeric::DivideByZero`. In the block’s `CATCH` phaser, use `when X::Numeric::DivideByZero` to match that specific type, and print `cannot divide by zero`.

## Example

The program prints:

```
cannot divide by zero
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
