---
title: Exercise ’Two exception types‘
---

{% include menu.html %}

## Problem

Define two custom exception classes, `TooSmall` and `TooBig`, each inheriting from `Exception`, with `message` methods returning `too small` and `too big` respectively.

Loop over the two types and, for each, throw an exception of that type inside its own block. Use a `CATCH` phaser with a `when` branch for each type, printing `small` for `TooSmall` and `big` for `TooBig`. This way you see both branches get used.

## Example

The program prints:

```
small
big
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
