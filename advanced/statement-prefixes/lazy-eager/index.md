---
title: Laziness and eagerness
---

{% include menu.html %}

Some lists in Raku are computed only as their elements are needed — they are _lazy_. The `lazy` and `eager` prefixes let you control this explicitly.

The `eager` prefix forces a list to be produced **all at once**, immediately:

```raku
my @squares = eager (1..3).map(* ** 2);
say @squares; # [1 4 9]
```

Without `eager` the `map` would still produce the values, but `eager` guarantees they are all computed there and then rather than on demand.

The `lazy` prefix does the opposite: it marks a list as lazy, so its elements are produced only when pulled. This is what lets a list be conceptually infinite:

```raku
my $numbers = lazy (1 .. Inf);
say $numbers.is-lazy; # True
```

The `.is-lazy` method confirms the list will not try to compute all of its (endless) elements up front.

This particular example is exactly a case where Raku would assume laziness anyway: an unbounded range like `1 .. Inf` is already lazy, so `say (1 .. Inf).is-lazy` prints `True` without the prefix. Writing `lazy` here changes nothing — it only makes the intent explicit. The prefix earns its keep when you want to make lazy a list that would otherwise be computed eagerly.

Most of the time Raku chooses sensibly on its own — ranges and sequences are lazy, ordinary array assignment is eager. Reach for these prefixes when you need to override that choice: `eager` to force an expensive computation to happen now, `lazy` to defer one that might be large or unbounded.

{% include nav.html %}
