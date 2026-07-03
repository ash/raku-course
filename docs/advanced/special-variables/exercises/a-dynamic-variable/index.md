---
title: Exercise ’A dynamic variable‘
---

{% include menu.html %}

## Problem

A dynamic variable — one written with the `*` twigil — is looked up by searching outward through the call stack, not by lexical scope. So the value a subroutine sees depends on who called it, which lets a block run the code it calls under a different identity.

1. Declare a dynamic variable `$*user` with the value `'guest'`.
2. Write a subroutine `whoami` that prints `running as ` followed by the current `$*user` (for example, `running as guest`). It must read `$*user` directly — it takes no parameters.
3. Call `whoami` once at the top level: it reports `guest`.
4. Then, inside a block that redeclares `$*user` as `'admin'`, call the *same* `whoami` again: it now reports `admin`.

## Example

The program prints:

```
running as guest
running as admin
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
