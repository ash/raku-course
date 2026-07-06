---
title: Exercise ’A negative error‘
---

{% include menu.html %}

## Problem

Define a custom exception class `Negative` that inherits from `Exception`, has an attribute `n`, and whose `message` method returns `<n> is negative`.

Write a subroutine `check($n)` that throws a `Negative` (carrying that `n`) when its argument is below zero, and otherwise returns the argument. Then, in a block, call `check(-5)` and use a `CATCH` phaser with `when Negative` to print the exception’s message.

Finally, after the block, throw another `Negative` (with `n` `-10`) to show that an exception thrown where no `CATCH` guards it ends the program.

## Example

The program prints:

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
