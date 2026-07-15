---
title: Exercise ’Sum a channel‘
---

{% include menu.html %}

## Problem

Create a channel and drive it with **two promises**. In one `start` block — the producer — send the numbers `1..6` into the channel and then close it. In a second `start` block — the consumer — collect every value with `.list` and return their sum. **Await both** promises together, and print the sum the consumer produced. This is the natural shape of a channel: a producer on one thread, a consumer on another, coordinated from a third.

## Example

The program prints:

```
21
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
