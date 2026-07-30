---
title: 'Quiz — Threads'
translations_gpt:
---

{% include menu.html %}

Was liefert `Thread.start`?

{:.quiz}
0 | Den Wert, den der Block erzeugt hat
1 | Ein `Thread`-Objekt, das die laufende Arbeit darstellt
0 | `True`, wenn der Thread gestartet ist
0 | Nichts — es blockiert, bis der Thread fertig ist

{% include quiz.html %}

<div class="extended-explanation">

`Thread.start` startet den Block auf einem neuen Thread und liefert sofort ein `Thread`-Objekt. Das Hauptprogramm läuft weiter; dieses Objekt verwenden Sie später, um auf das Ende des Threads zu warten.

</div>

{% include nav.html %}
