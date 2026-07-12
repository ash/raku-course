---
title: Tokens and rules
---

{% include menu.html %}

Inside a grammar you have been writing `token`. There are actually three keywords for declaring a named pattern — `regex`, `token`, and `rule` — and they differ in two small but important ways: whether they backtrack, and whether spaces in the pattern are significant.

Knowing which to choose makes grammars both faster and easier to read. This section explains all three.

{% include nav.html %}
