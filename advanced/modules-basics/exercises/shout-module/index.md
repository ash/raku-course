---
title: Exercise ’A shout module‘
---

{% include menu.html %}

## Problem

Create a module named `Shouter`, in a file `Shouter.rakumod`, that exports a subroutine `shout` returning its argument in upper case.

Then write a separate program that uses the module to print `shout('hi')`.

## Example

Run with the module on the search path, the program prints:

```console
$ raku -I. shout.raku
HI
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
