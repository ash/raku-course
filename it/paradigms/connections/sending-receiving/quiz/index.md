---
title: Quiz — Richieste HTTP
translations_gpt:
---

{% include menu.html %}

In una richiesta HTTP inviata attraverso un socket, che cosa segna la fine delle intestazioni della richiesta?

{:.quiz}
0 | Un punto
1 | Una riga vuota (un `\r\n` in più)
0 | La parola `END`
0 | La chiusura del socket

{% include quiz.html %}

<div class="extended-explanation">

HTTP separa le intestazioni dal corpo — e segnala «niente altre intestazioni» — con una riga vuota, scritta come un `\r\n` in più. Senza di essa, il server continua ad aspettare il resto della richiesta.

</div>

{% include nav.html %}
