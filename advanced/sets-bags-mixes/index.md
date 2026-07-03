---
title: Sets, bags, and mixes
---

{% include menu.html %}

Besides arrays and hashes, Raku offers a few specialised containers for collections of values. The simplest is the `Set` — an unordered collection of _distinct_ values, where each value is either a member or not, and duplicates are ignored.

You create a set with the `set` routine. Repeated values collapse into one:

```raku
my $s = set(1, 2, 3, 2, 1);
say $s.elems; # 3
```

Even though five numbers were passed in, the set has only three elements, because `1` and `2` appeared more than once.

The main question you ask a set is whether a value belongs to it. The `∈` operator (read as “is an element of”) returns a Boolean:

```raku
say 2 ∈ set(1, 2, 3); # True
say 9 ∈ set(1, 2, 3); # False
```

If you prefer to stay with plain ASCII, the same operator can be written as `(elem)`:

```raku
say 2 (elem) set(1, 2, 3); # True
```

The following topics show how to combine sets, and introduce bags and mixes, which are close relatives of the set.

{% include nav.html %}
