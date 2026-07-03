---
title: The Whatever star
---

{% include menu.html %}

You may have seen the `*` used in expressions like `* * 2` or `* %% 2` when calling `map` and `grep`. That `*` is the _Whatever star_, and the expression around it builds a small one-argument function on the fly. This section explains what it really is, how it relates to a block, and where the bare star means simply “whatever you want”.

## A star makes a function

When `*` appears in an expression, Raku turns the whole expression into a function — a `WhateverCode` — in which the star stands for the argument:

```raku
my $double = * * 2;

say $double.^name; # WhateverCode
say $double(21);   # 42
```

`* * 2` is a function that multiplies its one argument by two. This is why `(1..5).map(* * 2)` works: `map` is handed exactly such a one-argument function.

## Whatever versus a block

A Whatever expression is a shorter way of writing a function you could also write as a block. These three are equivalent:

```raku
* * 2
{ $_ * 2 }
-> $x { $x * 2 }
```

The Whatever form names no parameter; the block form uses the topic variable `$_`; the pointy form names `$x`. That last one, `-> $x { ... }`, is a small function in its own right — you will meet it properly in [Anonymous subroutines](/advanced/anonymous-subroutines); here it is enough to read it as a third way to spell the same one-argument function. For a simple expression the star is the most compact, which is why it is so common with `map`, `grep`, and `sort`:

```raku
say (1..5).map(* * 2);            # (2 4 6 8 10)
say (1..5).map({ $_ * 2 });       # (2 4 6 8 10)
say (1..5).map(-> $x { $x * 2 }); # (2 4 6 8 10)
```

Reach for a **block** when the logic needs more than one expression, or when a clearer named parameter helps. Reach for the **star** when a short expression says it all.

## More than one star

Each `*` in the expression is a separate argument, in order. So two stars make a **two**-argument function:

```raku
my $add = * + *;

say $add(3, 4); # 7
```

Here `* + *` is a two-argument function that adds its arguments — for example a running total and the next element.

## The bare Whatever

On its own, `*` means “whatever” — as much as there is, or no limit. Two everyday uses:

```raku
my @a = 10, 20, 30;
say @a[*-1];        # 30  — * is the array length, so *-1 is the last index

say (1..*).head(3); # (1 2 3)  — 1..* is an open-ended range
```

In `@a[*-1]` the star stands for the number of elements, and in `1..*` it stands for “no upper bound”. Whether it builds a function or means “whatever you want”, the star is one of Raku’s most useful pieces of shorthand.

{% include nav.html %}
