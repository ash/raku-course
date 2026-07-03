---
title: Exercise ’Enter a block‘
---

{% include menu.html %}

## Problem

Unlike `FIRST`, which runs only once, an `ENTER` phaser fires *every time* the block is entered — and a loop body is entered afresh on each iteration.

Loop over `1..2`. Inside the loop, put an `ENTER` phaser that prints `--entering`, and an ordinary statement that prints `body` with the current number. Observe that `--entering` appears once per iteration.

## Example

The program prints:

```
--entering
body 1
--entering
body 2
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
