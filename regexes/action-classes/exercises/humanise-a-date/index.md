---
title: Exercise ’Humanise a date‘
---

{% include menu.html %}

## Problem

Write a grammar that parses an ISO date such as `'2026-07-05'` into three tokens: `year`, `month`, and `day`. Write an **action class** in which each token method `make`s a value: `year` and `day` make their number as an integer, while `month` makes the **English month name** (`1` → `January`, …, `12` → `December`). The `TOP` method then reads those three values with `.made` and makes a human-readable string like `'5 July 2026'`. Parse `'2026-07-05'` with the action class and print `.made`.

## Example

The program prints:

```
5 July 2026
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
