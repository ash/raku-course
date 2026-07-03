---
title: Turning values into text
---

{% include menu.html %}

Whenever a program shows a value — when you `say` it, print it, or drop it into a string — that value has to be turned into text. Raku does not have a single fixed way of doing this. Instead, every value carries a few standard methods, each producing a string for a different purpose:

* `.gist` — a human-friendly form, the one `say` prints.
* `.Str` — the plain string form, used in string context.
* `.raku` — a code-like form, handy while debugging.

All three are ordinary methods defined for every value in the language, so they work the same way on a number, a string, an array, or an object of your own. The next pages look at each method in turn and then help you pick the right one; [the section after that introduces `dd`](/advanced/dd), a Rakudo tool built on top of `.raku`.

{% include nav.html %}
