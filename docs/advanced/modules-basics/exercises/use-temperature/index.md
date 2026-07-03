---
title: Exercise ’Use the converter‘
---

{% include menu.html %}

## Problem

You are given a module in a file `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Write a separate program that uses this module to convert a Celsius temperature — passed as a command-line argument — to Fahrenheit and print the result.

## Example

```console
$ raku -I. temperature.raku 100
212
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
