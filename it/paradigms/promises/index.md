---
title: Promise
translations_gpt:
---

{% include menu.html %}

Una _promise_ rappresenta un pezzo di lavoro che finirà a un certo punto e produrrà un risultato (o fallirà). Le promise sono il modo di alto livello, di tutti i giorni, di fare concorrenza in Raku: avvii il lavoro, ricevi subito indietro una promise e raccogli il risultato quando ti serve.

A differenza dei thread nudi, le promise sono facili da combinare — puoi aspettarne parecchie insieme, o concatenarne una al risultato di un'altra. E mentre un thread ti lascia solo *aspettare* che il lavoro finisca, attendere una promise ti consegna il **valore** che ha prodotto — e rilancia qualunque errore abbia incontrato — così raramente devi passare in giro i risultati attraverso variabili condivise. Questa sezione tratta l'avvio delle promise, l'attesa dei loro risultati e il modo di metterle insieme.

{% include nav.html %}
