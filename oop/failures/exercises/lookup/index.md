---
title: Exercise ’Lookup or not found‘
---

{% include menu.html %}

## Problem

Write a subroutine `lookup` that returns `100` when its argument is `'a'`, and otherwise calls `fail` with the message `no such key`.

Call `lookup('z')`, and print its result if it is defined. If it is not, print `not found` and, on a second line, the reason of the failure taken from the `Failure` itself (`reason: <message>`).

## Example

The program prints:

```
not found
reason: no such key
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
