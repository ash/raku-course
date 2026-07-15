---
title: The iterator protocol
---

{% include menu.html %}

Every value you can loop over — a list, a range, an array — can hand you an _iterator_ with the `.iterator` method. An iterator has one essential method, `pull-one`, which returns the next value each time you call it:

```raku
my $it = (10, 20, 30).iterator;
say $it.pull-one; # 10
say $it.pull-one; # 20
say $it.pull-one; # 30
```

When the values run out, `pull-one` returns a special sentinel, `IterationEnd`, instead of a real element. Asking the same `$it` for one more value shows it:

```raku
say $it.pull-one =:= IterationEnd; # True
```

The `=:=` operator tests for the **same object**, which is how you recognise the sentinel. That detail matters inside a loop, where you need to keep the pulled value *and* test it. If you **assign** it with `=`, the value lands in a container and the comparison ends up looking at the container rather than at `IterationEnd`. The remedy is to **bind** with `:=`, so the variable simply *is* whatever `pull-one` returned:

```raku
my $it = <a b c>.iterator;
loop {
    my $v := $it.pull-one;      # bind, not assign
    last if $v =:= IterationEnd;
    say $v;
}
```

The loop prints `a`, `b`, `c` and then stops. This is exactly what a `for` loop does for you under the hood: it calls `.iterator` on the thing you are looping over and keeps calling `pull-one` until it meets `IterationEnd`. You rarely need to write it out by hand, but doing so once shows that iterators — not lists — are what Raku actually loops over.

{% include nav.html %}
