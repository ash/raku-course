---
title: Exercise ’Read the constant‘
---

{% include menu.html %}

## Problem

You are given a module in a file `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Write a program that loads this module with `need` (not `use`) and prints the value of `$pi`. Remember that `need` does not import names, so you reach the variable through the module’s name.

## Example

```console
$ raku -I. read-pi.raku
3.14
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
