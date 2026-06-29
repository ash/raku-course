---
title: Solution of ‘Create variables of all known types’
---

{% include menu.html %}

Probably, this is not a kind of program that you will create in your practice. Nevertheless, it is important to know how to introspect the parts of real programs.

## Code

Here is a possible solution that creates the variables of the five mentioned types and prints their types.

```raku
my $a = 10;
my $b = 10.2;
my $c = 10e3;
my $d = True;
my $e = 'ten';

say $a, ' ', $a.WHAT;
say $b, ' ', $b.WHAT;
say $c, ' ', $c.WHAT;
say $d, ' ', $d.WHAT;
say $e, ' ', $e.WHAT;
```

🦋 Find the program in the file [types.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/types.raku).

## Output

This program prints the following output:

```console
$ raku exercises/data-types/types.raku
10 (Int)
10.2 (Rat)
10000 (Num)
True (Bool)
ten (Str)
```

{% include nav.html %}
