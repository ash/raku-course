---
title: Junctions
---

{% include menu.html %}

This subpart turns to _concurrent_ programming — doing more than one thing at a time. Raku has a rich, friendly toolkit for it: junctions, threads, promises, and channels. We start with the gentlest of them, the _junction_.

A junction is a single value that holds **several** values at once, joined by a logical relationship: _any_ of them, _all_ of them, _one_ of them, or _none_ of them. When you use a junction in a comparison, Raku tests every value behind it and combines the results. This often replaces a whole loop with a single expression — and, under the hood, the tests can run in parallel.

In the early days of the language, junctions went by another name: _quantum superpositions_ — a nod to the way one value can hold many possibilities at once, much like a particle in quantum physics.

{% include nav.html %}
