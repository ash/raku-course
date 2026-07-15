---
title: Recursion
---

{% include menu.html %}

This part of the course steps beyond the everyday and looks at three powerful styles of programming that Raku supports especially well — _functional_, _concurrent_, and _reactive_ — and then puts them to work building web services.

We begin with functional programming — a style built around subroutines that take and return other subroutines, values that are computed only when needed, and expressions rather than step-by-step statements. The first idea is _recursion_: a subroutine that calls itself.

A recursive subroutine solves a problem by reducing it to a smaller version of the same problem, until the problem becomes small enough to answer directly. Counting down, walking a tree, computing a factorial — all are naturally recursive. This section shows how to write a recursive subroutine and, just as importantly, how to stop it.

{% include nav.html %}
