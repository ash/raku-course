---
title: Exercise ’A colon map‘
---

{% include menu.html %}

## Problem

Here is an expression that doubles the numbers `1` to `10` and then keeps only those greater than `10`:

```raku
(1..10).map(* * 2).grep(* > 10).say;
```

Rewrite it so that the `grep` method call uses the colon form instead of parentheses. Leave the rest of the chain unchanged. Remember that the colon form consumes the rest of the statement, so only the last call in a chain may use it.

## Example

The program prints:

```
(12 14 16 18 20)
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
