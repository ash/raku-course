---
title: Quiz — In ascolto
translations_gpt:
---

{% include menu.html %}

Quale argomento fa aspettare a `IO::Socket::INET` le connessioni in arrivo invece di chiamare fuori verso un server?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` mette il socket in modalità server, in attesa su un indirizzo e una porta locali. Poi chiami `.accept` per prendere ogni connessione in arrivo. (`.accept` è un metodo, non un argomento del costruttore.)

</div>

{% include nav.html %}
