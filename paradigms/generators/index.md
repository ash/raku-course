---
title: Generators
---

{% include menu.html %}

A _generator_ is a routine that produces a series of values one at a time, yielding each on demand instead of building the whole list up front. Raku spells it with the `gather` / `take` pair: inside a `gather` block, every `take` hands one value to the resulting sequence, and the block pauses right there until the next value is pulled.

Because the values are produced lazily — only as they are asked for — a generator can even describe an endless series. This section shows how to build sequences with `gather` and `take`. The lower-level machinery that actually pulls those values out, one by one, is the subject of the next section, [Iterators](/paradigms/iterators).

{% include nav.html %}
