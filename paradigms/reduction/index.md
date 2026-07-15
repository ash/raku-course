---
title: Reduction
---

{% include menu.html %}

_Reduction_ is the act of combining a whole list of values into a single value by applying an operator between them: summing a list, multiplying it, finding its maximum, or joining its strings.

Raku has two ways to do this — the reduction metaoperator `[ ]`, which turns any infix operator into a list reducer, and the `reduce` routine, which does the same with a block. This section covers both.

{% include nav.html %}
