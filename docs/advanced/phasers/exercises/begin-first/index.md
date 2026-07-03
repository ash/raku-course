---
title: Exercise ’Begin first‘
---

{% include menu.html %}

## Problem

A `BEGIN` phaser is more than a block that runs early — it is also an *expression* whose value is computed once, at compile time, and then frozen into the program.

Use `BEGIN { 2 + 3 }` to initialise a variable `$compiled`, and print it. The `2 + 3` is evaluated while the program is still compiling, but the stored value is perfectly usable at run time.

## Example

The program prints:

```
5
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
