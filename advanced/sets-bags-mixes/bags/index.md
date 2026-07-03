---
title: Bags and mixes
---

{% include menu.html %}

A set remembers only _whether_ a value is present. Sometimes you also want to know _how many times_ it occurs. That is what a `Bag` is for: it keeps a count for each value.

You create a bag with the `bag` routine. Repeated values are not collapsed — they are counted:

```raku
my $b = bag(<a b a c a>);
say $b<a>; # 3
say $b<b>; # 1
```

Asking the bag for a value with the `< >` subscript returns how many times that value was put in. The `total` method gives the sum of all the counts:

```raku
say bag(<a b a c a>).total; # 5
```

A `Mix` is the same idea as a bag, except that the counts (called _weights_) may be fractional rather than whole numbers. To assign explicit weights, pair each value with its weight and coerce the list with `.Mix`:

```raku
my $m = (flour => 2.5, sugar => 0.75).Mix;
say $m<flour>; # 2.5
say $m.total;  # 3.25
```

Looking up a weight with `< >` and summing them with `total` work exactly as for a bag — only the numbers need not be whole. Here `total` adds the weights `2.5` and `0.75`, giving `3.25` — it is the sum of the weights, not a count of the values. Bags and mixes are handy whenever you need to track quantities — for example, counting how often each word appears in a text, or assigning weights to options.

{% include nav.html %}
