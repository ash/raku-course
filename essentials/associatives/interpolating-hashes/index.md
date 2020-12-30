---
title: Interpolating hashes
---

{% include menu.html %}

To interpolate an array elements in double-quoted strings write it as you do in a program itself: `%data<FR>`. To interpolate the whole hash, add a pair of empty angle or curly brackets: `@data{}`. The following program illustrates this approach:

```raku
my %data = FR => 'Paris', IT => 'Rome';

say "%data<FR>";
say "%data<>";

# Or:
# say "%data{}";
```

This program prints the requested data:

```console
$ raku t.raku
Paris
FR	Paris
IT	Rome
```

Note that printing the whole hash may generate multi-line output.

{% include nav.html %}
