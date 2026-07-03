---
title: Exercise ’Gather until full‘
---

{% include menu.html %}

## Problem

Loop over a generous range of numbers, `1` to `100`, and keep taking them — but stop as soon as their running total would exceed `10`. Print the list of numbers you collected.

This is something `grep` cannot do, because you need to stop the loop partway through. With `gather` and `take` you can: use `last` to break out of the loop the moment the limit is reached, no matter how many numbers are left.

## Example

The program prints:

```
[1 2 3 4]
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
