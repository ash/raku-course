---
title: 'Quiz — Traits'
translations_gpt:
---

{% include menu.html %}

Welke trait laat een subroutine **de variabele van de aanroeper wijzigen** via een parameter?

{:.quiz}
1 | `is rw`
0 | `is copy`
0 | `is default`
0 | geen — parameters zijn standaard schrijfbaar

{% include quiz.html %}

<div class="extended-explanation">

Een parameter is standaard alleen-lezen, dus aan een gewone parameter kun je niets toekennen. `is rw` bindt de parameter aan de eigen variabele van de aanroeper, zodat een wijziging binnen de routine ook buiten zichtbaar is. `is copy` zou in plaats daarvan een wijzigbare *kopie* geven en de aanroeper ongemoeid laten.

</div>

{% include nav.html %}
