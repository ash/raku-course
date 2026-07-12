---
title: Alternations
---

{% include menu.html %}

An _alternation_ lets a pattern match any one of several possibilities — `red` or `green` or `blue`, `yes` or `no`. This is one of the most common things you ask a regex to do.

Raku has two alternation operators: `|`, which picks the **longest** match, and `||`, which tries the alternatives in order and takes the **first** that matches. This section explains both and when each is the one you want.

{% include nav.html %}
