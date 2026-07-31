---
title: Quiz — Recursión con subrutinas multi
translations_gpt:
---

{% include menu.html %}

Dados `multi fact(0) { 1 }` y `multi fact($n) { $n * fact($n - 1) }`, ¿qué papel juega el candidato `multi fact(0)`?

{:.quiz}
1 | Es el caso base: el candidato que el despacho elige cuando el argumento es `0`
0 | Fija un valor por defecto que se devuelve para todo argumento
0 | Se ejecuta el primero en cada llamada, antes que el otro candidato
0 | Es sintaxis obligatoria que Raku ignora en tiempo de ejecución

{% include quiz.html %}

<div class="extended-explanation">

El literal `0` de la firma hace que ese candidato coincida solo cuando el argumento es exactamente `0`. Es el caso base expresado como subrutina propia: mientras el argumento sea mayor, el despacho sigue eligiendo `multi fact($n)`, y en cuanto la recursión llega a `0` cambia a `multi fact(0)` y se detiene.

</div>

{% include nav.html %}
