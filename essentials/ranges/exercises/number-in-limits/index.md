---
title: 'Exercise: If the number is within the limits'
---

{% include menu.html %}

## Problem

Write a program that asks to enter three numbers: `$begin`, `$end`, and `$n` and prints if `$n` lays in the range `[$begin, $end)` (including `$being` and excluding `$end`).

Assume that the entered numbers satisfy the condition: `$begin < $end + 1`, but do not add code to check it.

## Example

The possible output of the program is shown below for both cases:

```console
$ raku number-in-limits.raku
From (including): 10
To (excluding): 20
What is the number? 15
Within the limits.

$ raku number-in-limits.raku
From (including): 10
To (excluding): 20
What is the number? 30
Out of limits.
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
