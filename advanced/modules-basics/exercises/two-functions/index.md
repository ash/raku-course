---
title: Exercise ’Two functions in one module‘
---

{% include menu.html %}

## Problem

Create a module named `Calc`, in a file `Calc.rakumod`, that exports two subroutines: `add` and `mul`, which return the sum and the product of their two arguments.

Then write a separate program that uses the module to print `add(3, 4)` and `mul(3, 4)`, each on its own line.

## Example

Run with the module on the search path, the program prints:

```console
$ raku -I. calc.raku
7
12
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
