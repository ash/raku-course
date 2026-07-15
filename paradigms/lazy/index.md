---
title: Lazy and infinite sequences
---

{% include menu.html %}

A _lazy_ list computes its elements only when they are asked for. This makes it possible to describe sequences that are conceptually **infinite** — all the natural numbers, all the powers of two, the whole Fibonacci sequence — and then take just the part you need.

Raku builds such sequences with the sequence operator `...`. This section shows how to write finite and infinite sequences and how to pull values from them safely.

{% include nav.html %}
