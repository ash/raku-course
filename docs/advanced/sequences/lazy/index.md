---
title: Lazy and infinite sequences
---

{% include menu.html %}

A sequence does not have to compute all of its values at once. Raku sequences are _lazy_: each value is produced only when it is actually needed. This makes it possible to describe a sequence that has no end at all.

To write an infinite sequence, use `Inf` as the endpoint. Wrap the sequence in parentheses, because `...` binds more loosely than `=`:

```raku
my $naturals = (1 ... Inf);
```

Without the parentheses, `my $naturals = 1 ... Inf` would assign just `1` to the variable and then build the sequence on its own — and evaluating an endless sequence for no result would hang the program.

Nothing is computed yet. The sequence will hand out values only as you ask for them. The `head` method takes the first few:

```raku
say (1 ... Inf).head(5); # (1 2 3 4 5)
```

Even though the sequence is infinite, only the first five numbers are generated. Without laziness, a program that tried to build all of an endless sequence would never finish.

For a finite sequence, the `tail` method takes values from the end instead:

```raku
say (1 ... 100).tail(3); # (98 99 100)
```

Laziness is what lets you separate the _description_ of a sequence from the decision of how much of it to use.

{% include nav.html %}
