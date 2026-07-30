---
title: 'Quiz — Sockets'
translations_gpt:
---

{% include menu.html %}

Welke Raku-kernklasse opent een TCP-netwerkverbinding?

{:.quiz}
1 | `IO::Socket::INET`
0 | `IO::Path`
0 | `Channel`
0 | `Supply`

{% include quiz.html %}

<div class="extended-explanation">

`IO::Socket::INET` is de kernklasse voor TCP-sockets. Zij werkt zowel als client (verbinding maken met een server) als als server (op verbindingen luisteren), en heeft geen extra modules nodig.

</div>

{% include nav.html %}
