---
title: 'Quiz — Traits'
---

{% include menu.html %}

Which trait lets a subroutine **change the caller’s variable** through a parameter?

{:.quiz}
1 | `is rw`
0 | `is copy`
0 | `is default`
0 | none — parameters are writable by default

{% include quiz.html %}

<div class="extended-explanation">

A parameter is read-only by default, so a plain one cannot be assigned to. `is rw` binds the parameter to the caller’s own variable, so a change inside the routine is visible outside. `is copy` would instead give a modifiable *copy*, leaving the caller untouched.

</div>

{% include nav.html %}
