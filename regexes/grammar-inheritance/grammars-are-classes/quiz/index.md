---
title: 'Quiz — Inheriting grammars'
---

{% include menu.html %}

Which keyword makes one grammar inherit from another?

{:.quiz}
1 | `is`
0 | `does`
0 | `extends`
0 | `inherits`

{% include quiz.html %}

<div class="extended-explanation">

A grammar is a kind of class, so it uses the same inheritance keyword: `grammar Loud is Base { … }`. The derived grammar then inherits the base’s tokens and may override individual ones.

</div>

{% include nav.html %}
