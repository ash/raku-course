---
title: 'Quiz — make'
translations_gpt:
---

{% include menu.html %}

Welke functie hangt binnen een actiemethode een waarde aan de huidige match?

{:.quiz}
1 | `make`
0 | `made`
0 | `take`
0 | `return`

{% include quiz.html %}

<div class="extended-explanation">

`make` bewaart een waarde op de match; `made` (of `.ast`) leest haar naderhand terug. Een actiemethode berekent dus haar resultaat en geeft dat aan `make` mee.

</div>

{% include nav.html %}
