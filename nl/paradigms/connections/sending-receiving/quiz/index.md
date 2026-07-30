---
title: 'Quiz — HTTP-verzoeken'
translations_gpt:
---

{% include menu.html %}

Wat markeert in een HTTP-verzoek dat over een socket verstuurd wordt het einde van de verzoekheaders?

{:.quiz}
0 | Een punt
1 | Een lege regel (een extra `\r\n`)
0 | Het woord `END`
0 | De socket sluiten

{% include quiz.html %}

<div class="extended-explanation">

HTTP scheidt de headers van de body — en signaleert "geen headers meer" — met een lege regel, geschreven als een extra `\r\n`. Zonder die regel blijft de server op de rest van het verzoek wachten.

</div>

{% include nav.html %}
