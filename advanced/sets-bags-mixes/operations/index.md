---
title: Set operations
---

{% include menu.html %}

Sets can be combined with the usual operations from set theory. Each operator has a Unicode symbol and an ASCII spelling; you can use whichever you prefer.

The _union_ `∪` (or `(|)`) collects all the values that are in either set:

```raku
say (set(1, 2, 3) ∪ set(3, 4, 5)).elems; # 5
```

The two sets share the value `3`, so the union has five distinct elements: `1, 2, 3, 4, 5`.

The _intersection_ `∩` (or `(&)`) keeps only the values that are in both sets:

```raku
my $common = set(1, 2, 3) ∩ set(2, 3, 4);
say $common;       # Set(2 3) — note that sets are unordered
say $common.elems; # 2
say 2 ∈ $common;   # True
```

Here the intersection contains `2` and `3` — the values present in both sets. A set has no inherent order, so the two elements may appear either way round when printed.

The result of these operations is itself a set, so you can ask it the same questions: how many elements it has, and whether a particular value belongs to it.

{% include nav.html %}
