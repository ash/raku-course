---
title: Sequences
---

{% include menu.html %}

A _sequence_ is an ordered series of values produced one after another. Raku builds sequences with the `...` operator, which figures out the pattern from the values you give it and generates the rest up to an endpoint.

The simplest case counts from one value to another:

```raku
say 1 ... 5; # (1 2 3 4 5)
```

If you provide two starting values, Raku takes the step between them and continues with the same step. This is how you make an arithmetic sequence:

```raku
say 1, 3 ... 11; # (1 3 5 7 9 11)
```

Here the starting values `1, 3` set the step to two, so Raku counts up in twos and stops once it reaches `11`.

The value produced by `...` is of the `Seq` type:

```raku
say (1 ... 5).WHAT; # (Seq)
```

The following topics show other patterns the `...` operator can recognise, and how a sequence can be lazy — even infinite.

{% include nav.html %}
