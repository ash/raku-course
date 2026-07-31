---
title: Quiz — Ejecutar programas
translations_gpt:
---

{% include menu.html %}

¿Qué función pasa su orden a través de la **shell** del sistema, permitiendo tuberías y redirecciones?

{:.quiz}
0 | `run`
1 | `shell`
0 | `exec`
0 | `system`

{% include quiz.html %}

<div class="extended-explanation">

`shell` pasa una única cadena a la shell, que interpreta funcionalidades como las tuberías. `run` lanza un programa directamente con argumentos separados y sin shell, lo que es más seguro y la mejor opción por omisión.

</div>

{% include nav.html %}
