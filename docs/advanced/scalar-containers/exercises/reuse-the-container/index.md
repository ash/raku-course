---
title: Exercise ’Typed or untyped‘
---

{% include menu.html %}

## Problem

Declare two scalar variables side by side: an untyped `$untyped` and an `Int`-typed `$typed`. Dump both with `dd` while they are still empty, then assign `42` to each and dump both again. Look closely at how `dd` describes the two containers differently.

## Example

The program prints (to standard error):

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
