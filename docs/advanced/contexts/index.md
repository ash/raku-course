---
title: Contexts
---

{% include menu.html %}

A value in Raku can sometimes behave differently as it adapts to the _context_ in which it is used. For example, the same array can act as a number (its length), as a string (its elements joined), or as a truth value (array’s empty or not), depending on what the surrounding code asks for.

Understanding context explains a lot of Raku that would otherwise look surprising: why `+@array` is a number, why an array put in a scalar behaves as a single item, and why `if @array` tests emptiness. This section covers the main contexts.

{% include nav.html %}
