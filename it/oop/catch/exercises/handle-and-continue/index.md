---
title: Gestite e proseguite
translations_gpt:
---

{% include menu.html %}

## Problema

Scorri i tre elementi `ok`, `bad` e `ok`. Per ciascuno esegui un blocco che stampa `processed <elemento>`, ma che fa `die 'boom'` quando l'elemento è `bad`. Metti un phaser `CATCH` dentro il blocco, così che un elemento andato male venga segnalato come `skipped (<elemento>): <messaggio>` e il ciclo prosegua con l'elemento successivo invece di fermarsi.

## Esempio

Il programma stampa:

```
processed ok
skipped (bad): boom
processed ok
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
