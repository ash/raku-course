---
title: Exercise ’Plan two checks‘
---

{% include menu.html %}

## Problem

Write a test file that uses `plan` (not `done-testing`) to state up front that it contains exactly two checks. Make those checks:

1. With `is-deeply`, that sorting the list `3, 1, 2` gives `[1, 2, 3]`.
1. With `is`, that `10 % 3` equals `1`.

Give each check a short description of your own.

## Example

With the descriptions `sorted` and `remainder`, the program prints:

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
