---
title: Exercise ’Output and error‘
---

{% include menu.html %}

## Problem

A program adds up the list of numbers `3, 5, 7` in a loop. On every cycle, send the current running total to standard error as a progress message, and after the loop send the final result to standard output, using the stream handles directly.

This separation matters: the result can be captured or piped onward, while the progress messages stay out of the way on standard error.

## Example

When you run the program, both streams appear on the screen — the running totals, then the final result:

```
running total: 3
running total: 8
running total: 15
15
```

But if you discard standard error, only the real result remains:

```
$ raku output-and-error.raku 2>/dev/null
15
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
