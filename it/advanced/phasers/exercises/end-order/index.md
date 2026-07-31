---
title: L'ordine degli END
---

{% include menu.html %}

## Problema

Un programma puo avere piu di un phaser `END`. Quando cio accade, vengono eseguiti in ordine **inverso** rispetto a come sono stati scritti — l'ultimo dichiarato viene eseguito per primo (last in, first out).

Scrivi due phaser `END`, il primo che stampa `first END` e il secondo che stampa `second END`, seguiti da un semplice `say 'body'`. Prevedi e riproduci l'ordine dell'output.

## Esempio

Il programma stampa:

```
body
second END
first END
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
