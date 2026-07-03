---
title: Statement prefixes
---

{% include menu.html %}

A _statement prefix_ is a keyword placed in front of a statement or block to change how it is run. You have already met one — `gather`, which collects everything a block hands to `take`. This section introduces a few more general-purpose prefixes.

With prefixes you can turn a block into an expression that yields a value (`do`), control whether a list is computed immediately or on demand (`eager` and `lazy`), and run code purely for its side effects or with its warnings silenced (`sink` and `quietly`).

{% include nav.html %}
