---
title: 'Quiz — Listening'
---

{% include menu.html %}

Which argument makes `IO::Socket::INET` wait for incoming connections instead of dialling out to a server?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` puts the socket in server mode, waiting on a local address and port. You then call `.accept` to take each incoming connection. (`.accept` is a method, not a constructor argument.)

</div>

{% include nav.html %}
