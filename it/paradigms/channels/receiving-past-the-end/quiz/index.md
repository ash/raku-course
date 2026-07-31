---
title: Quiz — Ricevere oltre la fine
translations_gpt:
---

{% include menu.html %}

Di un channel sono stati ricevuti tutti i valori inviati. Che cosa succede al `.receive` **successivo** se il channel è **ancora aperto** (mai chiuso)?

{:.quiz}
0 | Solleva `X::Channel::ReceiveOnClosed`
1 | Blocca, aspettando un valore che potrebbe non arrivare mai
0 | Restituisce `Nil`
0 | Restituisce un elenco vuoto `()`

{% include quiz.html %}

<div class="extended-explanation">

Su un channel **aperto**, `.receive` non può sapere se un altro valore stia arrivando, quindi aspetta — potenzialmente per sempre, se il produttore si è fermato senza chiudere. L'eccezione `X::Channel::ReceiveOnClosed` è il caso del channel **chiuso**: solo un channel chiuso e vuoto fallisce in fretta invece di bloccare.

</div>

{% include nav.html %}
