---
title: Quiz — Tipos de supply
translations_gpt:
---

{% include menu.html %}

En un supply **bajo demanda** como `Supply.from-list`, ¿qué recibe un segundo enganche?

{:.quiz}
0 | Nada: el primer enganche gastó los valores
0 | Solo los valores emitidos después de engancharse
1 | La secuencia entera, desde el principio
0 | Un error

{% include quiz.html %}

<div class="extended-explanation">

Un supply bajo demanda reproduce sus valores para cada enganche. Cada enganche es independiente y recibe la secuencia completa desde el comienzo, a diferencia de un supply en vivo, donde los suscriptores tardíos se pierden los valores anteriores.

</div>

{% include nav.html %}
