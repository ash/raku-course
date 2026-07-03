---
title: Exercise ’Clean up on leave‘
---

{% include menu.html %}

## Problem

The real strength of `LEAVE` is that it runs *however* the block is left — including an early `return`.

Write a subroutine `work` whose body starts with a `LEAVE` phaser printing `Cleanup`. Then, still inside the subroutine, print `Working`, `return` immediately, and put a `say 'never reached'` line after the `return`. Call the subroutine. The early `return` skips that last line, but `Cleanup` is still printed.

## Example

The program prints:

```
Working
Cleanup
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
