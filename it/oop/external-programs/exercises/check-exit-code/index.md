---
title: Controllate il codice di uscita
translations_gpt:
---

{% include menu.html %}

## Problema

Esegui un comando che fallisce di proposito — per esempio `sh -c 'exit 4'` — e conserva il `Proc` che restituisce. Stampa il codice di uscita del comando e poi stampa `success` o `failure` a seconda che il comando sia riuscito o no.

## Esempio

Il programma stampa:

```
4
failure
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
