---
title: Exercise ’Survive a loop‘
---

{% include menu.html %}

## Problem

Loop over the numbers `1`, `2`, and `3`. For each number, print `ok: <n>`, except that when the number is `2` you should `die "bad: 2"`. Add a `CATCH` phaser inside the loop body that prints `caught: <message>`, so that one bad iteration does not stop the whole loop.

## Example

The program prints:

```
ok: 1
caught: bad: 2
ok: 3
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
