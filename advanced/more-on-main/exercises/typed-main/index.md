---
title: Exercise ’A typed MAIN‘
---

{% include menu.html %}

## Problem

A type constraint on a `MAIN` parameter is also checked before the body runs. Write a program whose `MAIN` takes a single `Int $n` and prints `$n` doubled. If the argument is not a valid integer, the signature does not match and Raku prints the usage message instead — you get the validation for free.

## Example

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
