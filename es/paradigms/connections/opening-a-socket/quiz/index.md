---
title: Quiz — Sockets
translations_gpt:
---

{% include menu.html %}

¿Qué clase básica de Raku abre una conexión de red TCP?

{:.quiz}
1 | `IO::Socket::INET`
0 | `IO::Path`
0 | `Channel`
0 | `Supply`

{% include quiz.html %}

<div class="extended-explanation">

`IO::Socket::INET` es la clase básica para sockets TCP. Funciona tanto como cliente (conectando a un servidor) como servidor (escuchando conexiones), y no necesita módulos adicionales.

</div>

{% include nav.html %}
