---
title: Special and dynamic variables
---

{% include menu.html %}

Raku variable names can carry a second marker after the sigil, called a _twigil_. The twigil tells you something about where the variable lives and how it is found — whether it is dynamically scoped, provided by the compiler, or tied to an object.

This section explains twigils, looks closely at the most useful kind — _dynamic_ variables, which are looked up through the call stack rather than by ordinary lexical scope — and surveys the special variables that Raku predefines for you.

{% include nav.html %}
