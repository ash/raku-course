---
title: 'Quiz — Recursie met multi-subs'
translations_gpt:
---

{% include menu.html %}

Gegeven `multi fact(0) { 1 }` en `multi fact($n) { $n * fact($n - 1) }`, welke rol speelt de kandidaat `multi fact(0)`?

{:.quiz}
1 | Het is het basisgeval — de kandidaat die de dispatch kiest wanneer het argument `0` is
0 | Hij stelt een standaardwaarde in die voor elk argument teruggegeven wordt
0 | Hij draait bij elke aanroep als eerste, vóór de andere kandidaat
0 | Het is verplichte syntaxis die Raku tijdens het draaien negeert

{% include quiz.html %}

<div class="extended-explanation">

De literal `0` in de signatuur laat die kandidaat alleen matchen wanneer het argument precies `0` is. Het is het basisgeval uitgedrukt als een eigen subroutine: zolang het argument groter is, blijft de dispatch `multi fact($n)` kiezen, en zodra de recursie `0` bereikt schakelt ze naar `multi fact(0)` en stopt ze.

</div>

{% include nav.html %}
