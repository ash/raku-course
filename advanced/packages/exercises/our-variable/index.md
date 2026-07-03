---
title: Exercise ’An our variable‘
---

{% include menu.html %}

## Problem

Only `our` makes a name visible outside its package; `my` keeps it private. Create a package `Config` with an `our` variable `$port` set to `8080` **and** a `my` variable `$secret` set to `42`. From outside, print `$Config::port`, and then print whether `$Config::secret` is defined — it should not be, because a `my` variable is not part of the namespace.

## Example

The program prints:

```
8080
False
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
