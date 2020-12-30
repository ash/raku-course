---
title: Interpolating arrays
---

{% include menu.html %}

To interpolate an array elements in double-quoted strings write it as you do in a program itself: `@data[1]`. To interpolate the whole array, add a pair of empty brackets: `@data[]`. The following program illustrates this approach:

```raku
my @data = 10, 20, 30;

say "First: @data[0], last: @data[1]";
say "All elements: @data[]";
```

This program prints the requested data:

```console
$ raku t.raku 
First: 10, last: 20
All elements: 10 20 30
```

{% include nav.html %}
