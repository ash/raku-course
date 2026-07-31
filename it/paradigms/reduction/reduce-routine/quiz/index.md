---
title: Quiz — Riduzione
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
say (10, 1, 2, 3).reduce(* - *);
```

{:.quiz}
1 | 4
0 | 8
0 | 16
0 | -4

{% include quiz.html %}

<div class="extended-explanation">

`reduce` ripiega l'elenco da sinistra a destra, e il **primo** argomento del blocco è sempre il risultato accumulato finora — qui l'operando sinistro di `-`. Quindi calcola `((10 - 1) - 2) - 3`, cioè `9 - 2 - 3 = 4`. Ripiegando nell'altro verso, `10 - (1 - (2 - 3))`, si otterrebbe `8`, e sommando invece di sottrarre si otterrebbe `16`. A differenza di `+`, la sottrazione dipende dall'ordine, quindi i ruoli dei due argomenti contano davvero.

</div>

{% include nav.html %}
