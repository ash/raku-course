---
title: Attendete un guasto
translations_gpt:
---

{% include menu.html %}

## Problema

Quando il blocco di una promise solleva un'eccezione, `await` la rilancia nel punto dell'`await`. Avvia una promise il cui blocco fa `die 'boom'`. Attendila dentro un blocco `try` con un phaser `CATCH` che stampa `caught: <messaggio>`.

## Esempio

Il programma stampa:

```
caught: boom
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
