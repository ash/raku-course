---
title: Il valore predefinito del contenitore
---

{% include menu.html %}

## Problema

Un contenitore puo avere un valore predefinito, impostato con il trait `is default`. Finche non si assegna nulla, la lettura della variabile restituisce quel valore predefinito, e `.VAR.default` lo riporta.

Dichiara uno scalare `$count` con un valore predefinito di `0`. Senza assegnare nulla, stampa la variabile stessa e poi stampa il valore predefinito del suo contenitore. Entrambe le righe dovrebbero mostrare `0`.

## Esempio

Il programma stampa:

```
0
0
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
