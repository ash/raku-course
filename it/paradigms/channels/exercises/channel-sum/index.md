---
title: Sommate un channel
translations_gpt:
---

{% include menu.html %}

## Problema

Crea un channel e pilotalo con **due promise**. In un blocco `start` — il produttore — invia i numeri `1..6` nel channel e poi chiudilo. In un secondo blocco `start` — il consumatore — raccogli ogni valore con `.list` e restituiscine la somma. **Attendi entrambe** le promise insieme e stampa la somma prodotta dal consumatore. Questa è la forma naturale di un channel: un produttore su un thread, un consumatore su un altro, coordinati da un terzo.

## Esempio

Il programma stampa:

```
21
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
