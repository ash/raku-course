---
title: Exercise ’Tuning in late‘
---

{% include menu.html %}

## Problem

Show that a live supply does not remember the past. Create a `Supplier`, emit `1` **before** tapping, then tap it to collect values into an array, and finally emit `2` and `3`. Print the array — the value emitted before the tap should be missing.

## Example

The program prints:

```
[2 3]
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
