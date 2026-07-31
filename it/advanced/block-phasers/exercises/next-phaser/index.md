---
title: Dopo ogni passo
---

{% include menu.html %}

## Problema

Il phaser `NEXT` viene eseguito alla *fine* di ogni iterazione del ciclo, il che rappresenta un buon momento per riportare i progressi.

Mantieni un totale parziale in `$sum`, inizializzato a `0`. Itera su `1..3`; ad ogni passaggio, prima aggiungi il numero corrente a `$sum`. Usa un phaser `NEXT` per stampare `sum so far: $sum` dopo ogni iterazione.

Fai attenzione all'ordine: il phaser `NEXT` viene eseguito dopo il corpo, quindi riporta il totale *incluso* il numero corrente.

## Esempio

Il programma stampa:

```
sum so far: 1
sum so far: 3
sum so far: 6
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
