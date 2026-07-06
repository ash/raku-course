---
title: Exercise ’Name the error‘
---

{% include menu.html %}

## Problem

Write a subroutine `risky` that does `die 'sub failed'`. Then call it from inside a block that has a `CATCH` phaser. The `CATCH` should print the exception’s type name (with `.^name`) and then its message (with `.message`). This shows that `CATCH` handles exceptions thrown by code the block *calls*, not only by `die` written directly in the block.

## Example

The program prints:

```
X::AdHoc
sub failed
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
