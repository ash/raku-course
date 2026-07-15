---
title: 'Quiz — Recursion with multi subs'
---

{% include menu.html %}

Given `multi fact(0) { 1 }` and `multi fact($n) { $n * fact($n - 1) }`, what role does the `multi fact(0)` candidate play?

{:.quiz}
1 | It is the base case — the candidate dispatch chooses when the argument is `0`
0 | It sets a default value returned for every argument
0 | It runs first on every call, before the other candidate
0 | It is required syntax that Raku ignores at run time

{% include quiz.html %}

<div class="extended-explanation">

The literal `0` in the signature makes that candidate match only when the argument is exactly `0`. It is the base case expressed as its own subroutine: while the argument is larger, dispatch keeps choosing `multi fact($n)`, and once the recursion reaches `0`, it switches to `multi fact(0)` and stops.

</div>

{% include nav.html %}
