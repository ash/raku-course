---
title: Argomenti nominati slurpy
---

{% include menu.html %}

## Problema

Scrivi una subroutine `describe` che prende un nome posizionale obbligatorio e poi raccoglie un numero qualsiasi di argomenti nominati in un hash slurpy (`*%opts`). Deve restituire una stringa della forma `name: key=value, key=value, ...`, elencando ogni opzione con le chiavi in ordine alfabetico.

Chiamala come `describe('Anna', colour => 'red', size => 5)` e stampa il risultato.

## Esempio

Il programma stampa:

```
Anna: colour=red, size=5
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
