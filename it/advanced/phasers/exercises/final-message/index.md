---
title: Messaggio finale
---

{% include menu.html %}

## Problema

Un phaser `END` viene eseguito dopo il codice principale, quindi vede lo stato *finale* delle variabili — il che lo rende ideale per un riepilogo.

Dichiara un contatore `$count` impostato a `0` e scrivi un phaser `END` (posizionalo prima del codice principale) che stampa `processed $count items`. Poi, nel corpo principale, incrementa il contatore tre volte con un ciclo. Il riepilogo dovrebbe riportare il conteggio finale, non il valore al momento in cui il phaser e stato scritto.

## Esempio

Il programma stampa:

```
processed 3 items
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
