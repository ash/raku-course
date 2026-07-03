---
title: Exercise ’Final message‘
---

{% include menu.html %}

## Problem

An `END` phaser runs after the main code, so it sees the *final* state of your variables — which makes it ideal for a summary.

Declare a counter `$count` set to `0`, and write an `END` phaser (place it before the main code) that prints `processed $count items`. Then, in the main body, increment the counter three times with a loop. The summary should report the final count, not the value at the moment the phaser was written.

## Example

The program prints:

```
processed 3 items
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
