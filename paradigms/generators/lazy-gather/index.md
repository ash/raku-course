---
title: Lazy gather
---

{% include menu.html %}

A `gather` block is _lazy_: it does not run all at once. It produces values only as they are pulled out, which means a `gather` can describe an **endless** series and still be useful — you simply stop taking values when you have enough.

The catch is that you must keep the result lazy. Storing it in a plain `@array` would try to collect every value at once, and for an endless series that never finishes. Instead, keep the sequence in a scalar (where it stays a lazy `Seq`) and pull a slice from it:

```raku
my $naturals = gather {
    my $n = 1;
    loop {
        take $n++;
    }
}

say $naturals[^5]; # (1 2 3 4 5)
```

The `loop` never ends, but only five values are ever produced, because that is all we asked for with `[^5]`. You can also pull from the front with `.head`:

```raku
say (gather { my $n = 1; loop { take $n++ } }).head(3); # (1 2 3)
```

Laziness is what lets `gather` model infinite streams safely: nothing is computed until it is needed, and you take exactly as much as you want.

{% include nav.html %}
