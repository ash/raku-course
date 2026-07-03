---
title: Exercise ’Use a stats module‘
---

{% include menu.html %}

## Problem

You are given a module `Stats.rakumod` that exports two subroutines — `total` and `mean` — where `mean` is built on top of `total`:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Write a separate program that uses this module and, for the list `10, 20, 30, 40`, prints both the total and the mean.

## Example

Run with the module on the search path, the program prints:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
