---
title: Quiz — Categorie di operatori
---

{% include menu.html %}

Nell'espressione `@a[0]`, a quale categoria appartiene l'indicizzazione `[0]`?

{:.quiz}
0 | postfix
1 | postcircumfix
0 | circumfix
0 | infix

{% include quiz.html %}

<div class="extended-explanation">

Un indice circonda il suo contenuto con parentesi quadre *e* segue un termine (qui `@a`), il che lo rende un operatore postcircumfisso. Un semplice postfisso (come `++`) non usa parentesi di contorno, e un circumfisso (come il costruttore di array `[1, 2, 3]`) circonda ma non segue un termine.

</div>

{% include nav.html %}
