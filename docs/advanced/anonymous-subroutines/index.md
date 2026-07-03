---
title: Anonymous subroutines
---

{% include menu.html %}

A subroutine does not have to have a name. An _anonymous_ subroutine is written just like a normal one, but without a name, and is usually stored in a variable so that you can call it later.

```raku
my $double = sub ($x) {
    $x * 2
};

say $double(5); # 10
```

The variable `$double` holds the subroutine, and `$double(5)` calls it with the argument `5`.

## Pointy blocks

Raku offers a shorter notation for the same thing — the _pointy block_. It uses the arrow `->` to introduce the parameters, and needs neither the word `sub` nor parentheses around them:

```raku
my $double = -> $x {
    $x * 2
};

say $double(5); # 10
```

This is the most common way to write a small anonymous subroutine.

## The `&` sigil

If you would rather call the subroutine by a name than through a `$` variable, declare the variable with the `&` sigil. Then you can call it without the sigil, exactly like an ordinary subroutine:

```raku
my &triple = -> $x {
    $x * 3
};

say triple(4); # 12
```

## Passing one to another function

You do not have to store an anonymous subroutine in a variable at all. Because it is just a value, you can hand it straight to a function that expects one — such as `map`, `grep`, or `sort`:

```raku
say (1, 2, 3).map(-> $x { $x * 2 }); # (2 4 6)
```

The pointy block is the anonymous subroutine here, and `map` calls it once for each element. This is, in fact, what you have been doing all along: every `{ ... }` block and `-> $x { ... }` you have passed to `map` and `grep` is a small anonymous subroutine, written right where it is needed instead of being named first.

{% include nav.html %}
