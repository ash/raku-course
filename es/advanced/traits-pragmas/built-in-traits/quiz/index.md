---
title: Quiz — Traits
translations_gpt:
---

{% include menu.html %}

¿Qué trait permite que una subrutina **modifique la variable del llamador** a través de un parámetro?

{:.quiz}
1 | `is rw`
0 | `is copy`
0 | `is default`
0 | ninguno — los parámetros son modificables por defecto

{% include quiz.html %}

<div class="extended-explanation">

Un parámetro es de solo lectura por defecto, por lo que uno simple no puede ser asignado. `is rw` vincula el parámetro a la propia variable del llamador, de modo que un cambio dentro de la rutina es visible fuera. `is copy` en cambio daría una *copia* modificable, dejando al llamador intacto.

</div>

{% include nav.html %}
