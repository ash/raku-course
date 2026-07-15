---
title: react and whenever
---

{% include menu.html %}

Tapping a single supply is fine, but real reactive programs often watch **several** streams at once and react to whichever produces a value next. Raku has dedicated syntax for this: the `react` block, with one or more `whenever` blocks inside it.

A `react` block sets up the reactions and then waits, running each `whenever` body as its supply emits — until all the supplies are done. This section shows how the two work together.

{% include nav.html %}
