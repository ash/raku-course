---
title: Exercise ’Await a supply‘
---

{% include menu.html %}

## Problem

`await` accepts more than promises — a supply can be awaited too: the program waits until the stream is **done** and gets its **last** value back. Build a supply of sensor readings from `18, 21, 19, 23`, await it, and print the final reading in the form shown below. No `tap` and no `react` block — a single `await` does the waiting.

## Example

The program prints:

```
final reading: 23
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
