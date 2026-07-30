---
title: 'Quiz — Soorten supplies'
translations_gpt:
---

{% include menu.html %}

Wat ontvangt een tweede tap bij een **on-demand**-supply als `Supply.from-list`?

{:.quiz}
0 | Niets — de eerste tap heeft de waarden opgebruikt
0 | Alleen de waarden die uitgezonden zijn nadat hij aftapte
1 | De hele reeks, vanaf het begin
0 | Een fout

{% include quiz.html %}

<div class="extended-explanation">

Een on-demand-supply speelt zijn waarden voor elke tap opnieuw af. Elke tap is onafhankelijk en ontvangt de volledige reeks vanaf het begin — anders dan bij een live supply, waar late abonnees eerdere waarden missen.

</div>

{% include nav.html %}
