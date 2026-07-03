---
title: Documenting code
---

{% include menu.html %}

Raku has a documentation markup built into the language, called _Pod_ (or _Rakudoc_). You write documentation directly in your source file using `=` directives, and the compiler can both render it and make it available to your program.

This section covers the basic Pod directives, the formatting codes for marking up text, and how to access the documentation — either as rendered text with `raku --doc`, or as data through the `$=pod` variable.

{% include nav.html %}
