---
title: Exercise ’Silence a warning‘
---

{% include menu.html %}

## Problem

`quietly` suppresses warnings, and like `do` it hands back the value of its block. Declare a name variable without a value, then build a greeting `"Hello, " ~ $name ~ "!"` inside a `quietly` block so the “uninitialized value” warning is hidden. Assign the block’s value to `$greeting` and print it.

## Example

The program prints:

```
Hello, !
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
