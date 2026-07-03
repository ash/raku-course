---
title: Item and list context
---

{% include menu.html %}

Two further contexts decide whether something is treated as a **list** of several values or as a single **item**. This is the difference behind the `@` and `$` sigils.

In _list context_, an array spreads out into its elements. A `for` loop puts its argument in list context, so it iterates over each element:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for @a;
say $count; # 3
```

In _item context_, the same array is treated as one single value. The `$( … )` contextualiser forces item context, so the loop now sees just one thing and runs once:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for $(@a);
say $count; # 1
```

This is why assigning an array to a scalar packs it as a single item rather than copying its elements: `my $x = @a` puts `@a` in item context. Note that that single element can be another container with many items in it:

```raku
my @a = 1, 2, 3;

my $var = @a;
say $var;      # [1 2 3]
say $var.WHAT; # (Array)
```

The `$var` variable now contains a single (as it’s a scalar container) object, which is an `Array`. You can easily prove this by treating `$x` as a kind of array reference (as you would call it in other languages):

```raku
say $var[1]; # 2
```

The matching `@( … )` contextualiser does the opposite, forcing list context.

There is also _sink context_ — the context of a statement whose value is thrown away, like a line that exists only for its side effect. When a value lands in sink context with nothing useful to do, Raku may warn about a “useless use”, which is a handy hint that you forgot to use a result.

The sigil you choose (`$` versus `@`) is really a choice of context, and the contextualisers `$( )` and `@( )` let you override it where needed.

{% include nav.html %}
