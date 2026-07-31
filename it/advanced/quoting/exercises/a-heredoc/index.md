---
title: Un heredoc
---

{% include menu.html %}

## Problema

Usando un heredoc *interpolante*, costruisci una lettera di conferma ordine a partire da alcune variabili — un cliente `$name`, un articolo `$item`, un prezzo unitario `$price` e una quantità `$count`. L'heredoc deve interpolare le variabili *e* calcolare il totale inline con un blocco `{ … }` incorporato (`$count * $price`).

Indenta il corpo dell'heredoc per allinearlo al codice circostante, e allinea il terminatore di chiusura al testo in modo che l'indentazione non appaia nell'output. Stampa il risultato.

## Esempio

Per `$name = 'Anna'`, `$item = 'Raku Book'`, `$price = 25` e `$count = 3`, il programma stampa, senza spazi iniziali:

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
