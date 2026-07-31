---
title: Quiz — Thread
translations_gpt:
---

{% include menu.html %}

Che cosa restituisce `Thread.start`?

{:.quiz}
0 | Il valore prodotto dal blocco
1 | Un oggetto `Thread` che rappresenta il lavoro in corso
0 | `True` se il thread è partito
0 | Niente — blocca finché il thread non finisce

{% include quiz.html %}

<div class="extended-explanation">

`Thread.start` lancia il blocco su un nuovo thread e restituisce subito un oggetto `Thread`. Il programma principale continua a girare; userai quell'oggetto più tardi per aspettare che il thread finisca.

</div>

{% include nav.html %}
