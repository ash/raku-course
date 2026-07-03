---
title: Exercise ’Override the dynamic‘
---

{% include menu.html %}

## Problem

Show how a dynamic variable flows through an intermediate routine that knows nothing about it.

Write a `log-it($msg)` subroutine that prints the message prefixed with a dynamic variable `$*prefix`. Write a second subroutine `task` that simply calls `log-it('working')` — and never mentions `$*prefix` itself. Then call `task` twice, each time from inside a block that sets `$*prefix` to a different value (`INFO`, then `DEBUG`).

## Example

The program prints:

```
INFO: working
DEBUG: working
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
