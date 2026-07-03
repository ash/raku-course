---
title: The put routine
---

{% include menu.html %}

By default, the `put` routine does the same job as [`print`](../print) but adds a newline at the end:

1. Converts its arguments to a string by calling the `Str` method on them.
1. Adds a newline character.
1. Sends it to the `STDOUT` stream.

A few examples:

```raku
42.put;
put 'Alpha', 'Beta';

my @array = 3, 4, 5;
put @array;

my %hash = a => 'b', c => 'd';
%hash.put;
```

The outputs of the program:

```console
$ raku t.raku
42
AlphaBeta
3 4 5
a	b
c	d
```

%%tipblock
## A newline of `put`

The actual characters that are added after the output are taken from the `nl-out` method of the output stream. Its default value is `\n`.
%%/tipblock

{% include nav.html %}
