---
title: 'Quiz — make'
translations_gpt:
---

{% include menu.html %}

Welche Funktion hängt innerhalb einer Aktionsmethode einen Wert an den aktuellen Treffer?

{:.quiz}
1 | `make`
0 | `made`
0 | `take`
0 | `return`

{% include quiz.html %}

<div class="extended-explanation">

`make` legt einen Wert auf dem Treffer ab; `made` (oder `.ast`) liest ihn hinterher zurück. Eine Aktionsmethode berechnet also ihr Ergebnis und übergibt es `make`.

</div>

{% include nav.html %}
