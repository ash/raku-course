---
title: Autothreading
---

{% include menu.html %}

When you pass a junction to something that expects a single value — a comparison, or an ordinary function — Raku quietly applies that operation to **every** value behind the junction and joins the results back into a junction. This is called _autothreading_.

For example, adding to a junction adds to each of its values:

```raku
my $j = 1 | 2 | 3;
say $j + 10; # any(11, 12, 13)
```

The `+ 10` was applied to `1`, `2`, and `3` separately, giving a new _any_ junction `any(11, 12, 13)`.

With a comparison, the joined result collapses to a single truth value according to the junction’s kind:

```raku
say so all(3, 7, 2) > 0;  # True  — every value is positive
say so all(3, -1, 2) > 0; # False — not all are positive
say so none(1, 2, 3) == 5; # True — none of them is 5
```

Autothreading is what makes junctions so concise: one comparison checks many values. Conceptually the checks are independent, so Raku is free to run them in parallel — which is why junctions sit naturally in the concurrency toolkit.

{% include nav.html %}
