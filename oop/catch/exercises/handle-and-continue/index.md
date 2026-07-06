---
title: Exercise ’Handle and continue‘
---

{% include menu.html %}

## Problem

Loop over the three items `ok`, `bad`, and `ok`. For each one, run a block that prints `processed <item>`, but does `die 'boom'` when the item is `bad`. Put a `CATCH` phaser inside the block so that a failing item is reported as `skipped (<item>): <message>` and the loop carries on to the next item instead of stopping.

## Example

The program prints:

```
processed ok
skipped (bad): boom
processed ok
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
