---
title: 'Quiz — Sockets'
---

{% include menu.html %}

Which core Raku class opens a TCP network connection?

{:.quiz}
1 | `IO::Socket::INET`
0 | `IO::Path`
0 | `Channel`
0 | `Supply`

{% include quiz.html %}

<div class="extended-explanation">

`IO::Socket::INET` is the core class for TCP sockets. It works both as a client (connecting to a server) and as a server (listening for connections), and needs no extra modules.

</div>

{% include nav.html %}
