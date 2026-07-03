---
title: Dumping variables
---

{% include menu.html %}

Call `dd` to see what a variable holds, much as you would do with `say`:

```raku
my $var = 42;
dd $var;
```

Together with the value, `dd` also shows the name of the variable:

```console
$var = 42
```

If the variable has a declared type, the type appears too. Compare the output of the following program with the previous one:

```raku
my Int $var = 42;
dd $var;
```

```console
Int $var = 42
```

This is the main difference from `say`: a single `dd` called on a scalar tells you the name, and, when known, the type of the data — so you can drop several `dd` calls into a program and still recognise which output belongs to which variable.

You can also dump more complex data structures, such as arrays or hashes. Here, `dd` prints a code-like representation of the value:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
```

```console
[10, 20, [1, 2, 3], 30]
```

Notice that the nested array stays clearly visible (no variable name printed though). The same works for hashes, whose keys `dd` prints in sorted order:

```raku
my %hash =
    gamma => 'g',
    alpha => 'a',
    beta  => 'b';
dd %hash;
```

```console
{:alpha("a"), :beta("b"), :gamma("g")}
```

{% include nav.html %}
