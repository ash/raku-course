---
title: 'Quiz — Über das Ende hinaus empfangen'
translations_gpt:
---

{% include menu.html %}

Von einem Kanal wurden alle gesendeten Werte empfangen. Was geschieht beim **nächsten** `.receive`, wenn der Kanal **noch offen** ist (nie geschlossen wurde)?

{:.quiz}
0 | Es wirft `X::Channel::ReceiveOnClosed`
1 | Es blockiert und wartet auf einen Wert, der vielleicht nie kommt
0 | Es liefert `Nil`
0 | Es liefert eine leere Liste `()`

{% include quiz.html %}

<div class="extended-explanation">

Auf einem **offenen** Kanal kann `.receive` nicht erkennen, ob noch ein Wert unterwegs ist, es wartet also — womöglich ewig, wenn der Erzeuger ohne Schließen aufgehört hat. Die Ausnahme `X::Channel::ReceiveOnClosed` gehört zum **geschlossenen** Fall: Nur ein geschlossener, leerer Kanal scheitert rasch, statt zu blockieren.

</div>

{% include nav.html %}
