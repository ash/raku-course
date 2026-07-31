---
title: Quiz — Hilos
translations_gpt:
---

{% include menu.html %}

¿Qué devuelve `Thread.start`?

{:.quiz}
0 | El valor que produjo el bloque
1 | Un objeto `Thread` que representa el trabajo en marcha
0 | `True` si el hilo arrancó
0 | Nada: se bloquea hasta que el hilo termina

{% include quiz.html %}

<div class="extended-explanation">

`Thread.start` lanza el bloque en un hilo nuevo y devuelve de inmediato un objeto `Thread`. El programa principal sigue corriendo; usas después ese objeto para esperar a que el hilo termine.

</div>

{% include nav.html %}
