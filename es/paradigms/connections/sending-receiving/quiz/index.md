---
title: Quiz — Peticiones HTTP
translations_gpt:
---

{% include menu.html %}

En una petición HTTP enviada por un socket, ¿qué marca el final de las cabeceras de la petición?

{:.quiz}
0 | Un punto
1 | Una línea en blanco (un `\r\n` de más)
0 | La palabra `END`
0 | Cerrar el socket

{% include quiz.html %}

<div class="extended-explanation">

HTTP separa las cabeceras del cuerpo — y señala «no hay más cabeceras» — con una línea en blanco, escrita como un `\r\n` de más. Sin ella, el servidor se queda esperando el resto de la petición.

</div>

{% include nav.html %}
