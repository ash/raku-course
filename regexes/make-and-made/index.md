---
title: The parse tree, make and made
---

{% include menu.html %}

Parsing tells you that a string matches a grammar, and it builds a _parse tree_ — a match object with a named capture for every token. But usually you do not want the raw text; you want a **result**: the integer `42`, not the characters `4` and `2`.

This section shows how to walk the parse tree, and how to attach a computed value to a match with `make`, then read it back with `made`.

{% include nav.html %}
