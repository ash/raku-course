---
title: Contesti
---

{% include menu.html %}

Un valore in Raku a volte puo comportarsi in modo diverso adattandosi al _contesto_ in cui viene utilizzato. Ad esempio, lo stesso array puo agire come un numero (la sua lunghezza), come una stringa (i suoi elementi uniti), o come un valore di verita (array vuoto o meno), a seconda di cio che il codice circostante richiede.

Comprendere il contesto spiega molto di Raku che altrimenti sembrerebbe sorprendente: perche `+@array` e un numero, perche un array inserito in uno scalare si comporta come un singolo elemento, e perche `if @array` verifica se e vuoto. Questa sezione copre i contesti principali.

{% include nav.html %}
