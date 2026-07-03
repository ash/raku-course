---
title: Exercise ’The order of ENDs‘
---

{% include menu.html %}

## Problem

A program can have more than one `END` phaser. When it does, they run in **reverse** order of how they were written — the last one declared runs first (last in, first out).

Write two `END` phasers, the first printing `first END` and the second printing `second END`, followed by a plain `say 'body'`. Predict and reproduce the output order.

## Example

The program prints:

```
body
second END
first END
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
