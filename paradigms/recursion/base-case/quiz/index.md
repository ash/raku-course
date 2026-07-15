---
title: 'Quiz — The base case'
---

{% include menu.html %}

What happens if a recursive subroutine has no reachable base case?

{:.quiz}
0 | It returns `Nil`
0 | It returns `0`
1 | It never stops calling itself and eventually fails
0 | The compiler refuses to run it

{% include quiz.html %}

<div class="extended-explanation">

With no reachable base case, each call makes another call without end. The recursion never terminates, and the program eventually runs out of call stack and fails. A base case is what lets the recursion stop.

</div>

{% include nav.html %}
