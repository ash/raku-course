---
title: Quiz — Socket
translations_gpt:
---

{% include menu.html %}

Quale classe di base di Raku apre una connessione di rete TCP?

{:.quiz}
1 | `IO::Socket::INET`
0 | `IO::Path`
0 | `Channel`
0 | `Supply`

{% include quiz.html %}

<div class="extended-explanation">

`IO::Socket::INET` è la classe di base per i socket TCP. Funziona sia come client (connettendosi a un server) sia come server (restando in ascolto di connessioni), e non ha bisogno di moduli aggiuntivi.

</div>

{% include nav.html %}
