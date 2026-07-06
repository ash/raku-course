---
title: Exercise ’Note a warning‘
---

{% include menu.html %}

## Problem

A program processes a value that turns out to be negative. Use `note` to send a warning to standard error when the value is below zero, and `say` to send the real result — its absolute value — to standard output. Use the value `-3`.

## Example

Both lines appear on the screen:

```
Warning: the value is negative
3
```

If standard error is discarded, only the result remains:

```
$ raku note-a-warning.raku 2>/dev/null
3
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
