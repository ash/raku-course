---
title: Exercise ’Await a failure‘
---

{% include menu.html %}

## Problem

When a promise’s block throws, `await` rethrows that exception at the point of the `await`. Start a promise whose block does `die 'boom'`. Await it inside a `try` block with a `CATCH` phaser that prints `caught: <message>`.

## Example

The program prints:

```
caught: boom
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
