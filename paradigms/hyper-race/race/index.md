---
title: Unordered parallelism with race
---

{% include menu.html %}

`.race` parallelises in the same way as `.hyper`, with one difference: it does **not** promise to return the results in order. Whichever worker finishes first contributes its result first.

```raku
say (1..10).race.map(* ** 2).sort; # (1 4 9 16 25 36 49 64 81 100)
```

The squares come back in an unpredictable order, so the `.sort` is there to make the output deterministic. Had we printed without sorting, the numbers would all be present but possibly shuffled.

Because it does not have to keep results ordered, `.race` can have slightly less overhead than `.hyper`. The trade-off is simple:

* use `.hyper` when the **order** of the results matters;
* use `.race` when it does **not** — for example when you are going to sum, count, or otherwise combine the results in an order-independent way.

```raku
say (1..100).race.map(* * 2).sum; # 10100
```

Summing is order-independent, so `.race` is a fine choice here and gives the same `10100`. Both methods are about the same idea — let independent work run at once — and you pick between them on whether you care about ordering.

{% include nav.html %}
