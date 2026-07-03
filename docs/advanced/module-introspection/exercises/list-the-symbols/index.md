---
title: Exercise ’List the symbols‘
---

{% include menu.html %}

## Problem

You are given a module in a file `Circle.rakumod` that defines two `our` variables:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Write a program that uses the module and prints, first, how many names are defined in the module’s package, and then the names themselves in alphabetical order.

## Example

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
