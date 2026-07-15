---
title: 'Quiz — The iterator protocol'
---

{% include menu.html %}

When an iterator has no more values to give, what does `pull-one` return, and how do you test for it?

{:.quiz}
1 | `IterationEnd`, tested with `=:=`
0 | `Nil`, tested with `.defined`
0 | an empty list `()`, tested with `==`
0 | `0`, tested with `=:=`

{% include quiz.html %}

<div class="extended-explanation">

An exhausted iterator returns the sentinel object `IterationEnd`. Because it is a single shared object, you check for it by identity with `=:=` (the *same object* test), not by value or definedness. A `for` loop uses exactly this check to know when to stop.

</div>

{% include nav.html %}
