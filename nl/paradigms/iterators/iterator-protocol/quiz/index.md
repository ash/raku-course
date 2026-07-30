---
title: 'Quiz — Het iteratorprotocol'
translations_gpt:
---

{% include menu.html %}

Wanneer een iterator geen waarden meer te geven heeft, wat geeft `pull-one` dan terug, en hoe test je daarop?

{:.quiz}
1 | `IterationEnd`, getest met `=:=`
0 | `Nil`, getest met `.defined`
0 | een lege lijst `()`, getest met `==`
0 | `0`, getest met `=:=`

{% include quiz.html %}

<div class="extended-explanation">

Een uitgeputte iterator geeft het schildwachtobject `IterationEnd` terug. Omdat het één gedeeld object is, controleer je erop via identiteit met `=:=` (de test op *hetzelfde object*), niet op waarde of gedefinieerdheid. Een `for`-lus gebruikt precies deze controle om te weten wanneer hij moet stoppen.

</div>

{% include nav.html %}
