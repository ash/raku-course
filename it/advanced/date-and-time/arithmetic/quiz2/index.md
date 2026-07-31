---
title: Quiz — Aggiungere mesi
---

{% include menu.html %}

Cosa stampa il seguente programma?

```raku
say Date.new(2026, 1, 31).later(:months(1));
```

{:.quiz}
1 | 2026-02-28
0 | 2026-03-03
0 | 2026-02-31
0 | 2026-03-31

{% include quiz.html %}

<div class="extended-explanation">

Un mese dopo il 31 gennaio sarebbe il "31 febbraio", che non esiste. `later` limita il risultato all'ultimo giorno valido del mese di destinazione, quindi si ottiene il 28 febbraio 2026 (il 2026 non è un anno bisestile, pertanto febbraio ha 28 giorni).

</div>

{% include nav.html %}
