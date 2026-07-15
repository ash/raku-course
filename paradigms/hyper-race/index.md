---
title: Hyper and race
---

{% include menu.html %}

The functional list operations you met earlier — `map` and `grep` — process their elements one after another. When the work on each element is independent and substantial, Raku can run it **in parallel** across several CPU cores, with almost no change to your code.

Two methods switch this on: `.hyper`, which keeps the results in order, and `.race`, which does not but can be a little faster. This section shows both.

{% include nav.html %}
