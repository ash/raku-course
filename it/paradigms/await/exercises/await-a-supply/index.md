---
title: Attendete un supply
translations_gpt:
---

{% include menu.html %}

## Problema

`await` accetta più delle sole promise: si può attendere anche un supply — il programma aspetta che il flusso sia **concluso** e ne riceve indietro l'**ultimo** valore. Costruisci un supply di letture da sensore a partire da `18, 21, 19, 23`, attendilo e stampa la lettura finale nella forma mostrata sotto. Niente `tap` e niente blocco `react`: un unico `await` fa l'attesa.

## Esempio

Il programma stampa:

```
final reading: 23
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
