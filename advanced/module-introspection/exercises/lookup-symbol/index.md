---
title: Exercise ’Look up a symbol‘
---

{% include menu.html %}

## Problem

Besides listing a package’s names, you can reach a name dynamically by using it as a key in the package’s stash. You are given a module `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Write a separate program that loads the module and prints the value of `$pi` by looking it up in the stash with `Circle::{'$pi'}` — not with the qualified `$Circle::pi`.

## Example

Run with the module on the search path, the program prints:

```console
$ raku -I. lookup.raku
3.14
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
