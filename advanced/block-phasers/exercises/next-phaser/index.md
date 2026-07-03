---
title: Exercise ’After each step‘
---

{% include menu.html %}

## Problem

The `NEXT` phaser runs at the *end* of each loop iteration, which is a good moment to report progress.

Keep a running total in `$sum`, starting at `0`. Loop over `1..3`; on each pass, first add the current number to `$sum`. Use a `NEXT` phaser to print `sum so far: $sum` after each iteration.

Mind the order: the `NEXT` phaser runs after the body, so it reports the total *including* the current number.

## Example

The program prints:

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
