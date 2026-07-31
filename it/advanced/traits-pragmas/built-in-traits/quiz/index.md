---
title: Quiz — Trait
---

{% include menu.html %}

Quale trait permette a una subroutine di **modificare la variabile del chiamante** attraverso un parametro?

{:.quiz}
1 | `is rw`
0 | `is copy`
0 | `is default`
0 | nessuno — i parametri sono scrivibili per impostazione predefinita

{% include quiz.html %}

<div class="extended-explanation">

Un parametro è in sola lettura per impostazione predefinita, quindi non è possibile assegnargli un valore. `is rw` lega il parametro alla variabile del chiamante, quindi una modifica all'interno della routine è visibile all'esterno. `is copy` invece fornirebbe una *copia* modificabile, lasciando inalterata la variabile del chiamante.

</div>

{% include nav.html %}
