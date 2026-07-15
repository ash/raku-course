---
title: Iterators
---

{% include menu.html %}

The previous section built sequences with `gather` and `take`. This one goes one level down, to the mechanism that actually delivers the values: the _iterator_.

An iterator is the small object behind every list, range, and lazy sequence in Raku. It knows how to do one thing — produce the **next** value — and nothing more. Whenever you write a `for` loop or call `map`, Raku quietly asks an iterator for one value at a time until there are none left. This section shows that protocol directly: how to pull values from an iterator by hand, and how to write an iterator of your own.

{% include nav.html %}
