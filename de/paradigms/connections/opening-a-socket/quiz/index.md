---
title: 'Quiz — Sockets'
translations_gpt:
---

{% include menu.html %}

Welche Raku-Kernklasse öffnet eine TCP-Netzverbindung?

{:.quiz}
1 | `IO::Socket::INET`
0 | `IO::Path`
0 | `Channel`
0 | `Supply`

{% include quiz.html %}

<div class="extended-explanation">

`IO::Socket::INET` ist die Kernklasse für TCP-Sockets. Sie arbeitet sowohl als Client (Verbindung zu einem Server) als auch als Server (Lauschen auf Verbindungen) und braucht keine zusätzlichen Module.

</div>

{% include nav.html %}
