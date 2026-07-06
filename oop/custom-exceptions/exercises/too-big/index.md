---
title: Exercise ’Too big‘
---

{% include menu.html %}

## Problem

Define a custom exception class `TooBig` that inherits from `Exception` and has two attributes, `value` and `limit`. Its `message` method should return `Value <value> exceeds the limit of <limit>`.

Then loop over the values `30`, `99`, and `60` with a limit of `50`. For each value, throw a `TooBig` only when the value exceeds the limit, and use a `CATCH` phaser with `when TooBig` that prints the message **and**, on a second line, reads the exception’s `limit` attribute directly to print `Try a value up to <limit>.`. A value within the limit should simply report that it is fine.

This shows that the exception is raised only for the failing numbers; the others pass straight through, and the loop keeps going either way.

## Example

The program prints:

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
