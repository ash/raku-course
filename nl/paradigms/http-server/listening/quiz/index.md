---
title: 'Quiz — Luisteren'
translations_gpt:
---

{% include menu.html %}

Welk argument laat `IO::Socket::INET` op binnenkomende verbindingen wachten in plaats van naar een server uit te bellen?

{:.quiz}
1 | `:listen`
0 | `:host`
0 | `:server`
0 | `:accept`

{% include quiz.html %}

<div class="extended-explanation">

`:listen` zet de socket in servermodus, wachtend op een lokaal adres en poort. Je roept daarna `.accept` aan om elke binnenkomende verbinding aan te nemen. (`.accept` is een methode, geen constructorargument.)

</div>

{% include nav.html %}
