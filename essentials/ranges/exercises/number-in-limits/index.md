---
title: 'Exercise: If the number is within the limits'
---

{% include menu.html %}

## Problem

Write a program that asks to enter three numbers: `$begin`, `$end`, and `$n` and prints `True` of `False` depending of whether `$n` is in the range `[$begin, $end)` (including `$begin` but excluding `$end`).

Please assume that the entered numbers satisfy the condition: `$begin < $end + 1`, but do not add code to check it.

## Example

The possible output of the program for both cases is shown below:

```console
$ raku number-in-limits.raku
From (including): 10
To (excluding): 20
What is the number? 15
True

$ raku number-in-limits.raku
From (including): 10
To (excluding): 20
What is the number? 30
False
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
