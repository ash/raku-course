---
title: Quiz — Escuchar
translations_gpt:
---

{% include menu.html %}

¿Qué argumento hace que `IO::Socket::INET` espere conexiones entrantes en lugar de llamar hacia un servidor?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` pone el socket en modo servidor, esperando en una dirección y un puerto locales. Después llamas a `.accept` para tomar cada conexión entrante. (`.accept` es un método, no un argumento del constructor.)

</div>

{% include nav.html %}
