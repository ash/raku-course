---
title: Quiz — Twigils
---

{% include menu.html %}

Welke twigil markeert een **dynamische** variabele, die via de call stack wordt opgezocht?

{:.quiz}
1 | `*`
0 | `?`
0 | `!`
0 | `.`

{% include quiz.html %}

<div class="extended-explanation">

De `*`-twigil markeert een dynamische variabele, zoals in `$*OUT` of `$*greeting`. De `?`-twigil is voor compile-time waarden, `!` voor een privaat attribuut, en `.` voor de accessor van een attribuut.

</div>

{% include nav.html %}
