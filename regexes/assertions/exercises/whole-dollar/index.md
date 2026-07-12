---
title: Exercise ’A whole-dollar amount‘
---

{% include menu.html %}

## Problem

Combine a lookbehind and a lookahead to match a **whole-dollar** amount: the digits that come right after a `$` and are **not** followed by a decimal point. So `$50` matches (`50`), but `$3.99` does not — it has cents.

Use a positive lookbehind for `$` and a negative lookahead for `.`, and add a `>>` word boundary after the digits so the whole number is matched. Print the match for `'$50'`.

## Example

The program prints:

```
｢50｣
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
