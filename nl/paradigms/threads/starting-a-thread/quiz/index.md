---
title: 'Quiz — Threads'
translations_gpt:
---

{% include menu.html %}

Wat geeft `Thread.start` terug?

{:.quiz}
0 | De waarde die het blok opleverde
1 | Een `Thread`-object dat het lopende werk voorstelt
0 | `True` als de thread gestart is
0 | Niets — het blokkeert tot de thread klaar is

{% include quiz.html %}

<div class="extended-explanation">

`Thread.start` start het blok op een nieuwe thread en geeft meteen een `Thread`-object terug. Het hoofdprogramma loopt door; je gebruikt dat object later om op de voltooiing van de thread te wachten.

</div>

{% include nav.html %}
