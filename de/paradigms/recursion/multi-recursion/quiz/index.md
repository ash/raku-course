---
title: 'Quiz — Rekursion mit multi-Subs'
translations_gpt:
---

{% include menu.html %}

Welche Rolle spielt der Kandidat `multi fact(0)`, gegeben `multi fact(0) { 1 }` und `multi fact($n) { $n * fact($n - 1) }`?

{:.quiz}
1 | Er ist der Grundfall — der Kandidat, den die Auswahl wählt, wenn das Argument `0` ist
0 | Er setzt einen Standardwert, der für jedes Argument geliefert wird
0 | Er läuft bei jedem Aufruf zuerst, vor dem anderen Kandidaten
0 | Er ist vorgeschriebene Syntax, die Raku zur Laufzeit übergeht

{% include quiz.html %}

<div class="extended-explanation">

Das Literal `0` in der Signatur lässt diesen Kandidaten nur treffen, wenn das Argument genau `0` ist. Es ist der Grundfall, ausgedrückt als eigene Subroutine: Solange das Argument größer ist, wählt die Auswahl weiterhin `multi fact($n)`, und sobald die Rekursion `0` erreicht, wechselt sie zu `multi fact(0)` und hält an.

</div>

{% include nav.html %}
