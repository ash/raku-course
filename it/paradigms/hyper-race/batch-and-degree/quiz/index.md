---
title: Quiz — batch e degree
translations_gpt:
---

{% include menu.html %}

In `(1..1000).hyper(:degree(4), :batch(50))`, che cosa controlla `:batch(50)`?

{:.quiz}
1 | Quanti elementi ogni lavoratore elabora in una volta prima di prenderne altri
0 | Quanti thread lavoratori girano nello stesso momento
0 | Quanti elementi l'intera pipeline può elaborare
0 | Il numero di core della CPU che il programma può usare

{% include quiz.html %}

<div class="extended-explanation">

`:batch` è la **dimensione del lotto** — quanti elementi un lavoratore prende per turno. Il numero di lavoratori è `:degree` (qui `4`). Un lotto più grande taglia il sovraccarico di coordinamento; uno più piccolo bilancia più uniformemente il lavoro disomogeneo. Entrambi sono suggerimenti che il compilatore può aggiustare o ignorare.

</div>

{% include nav.html %}
