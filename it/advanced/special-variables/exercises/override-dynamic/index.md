---
title: Sovrascrivere la dinamica
---

{% include menu.html %}

## Problema

Mostra come una variabile dinamica fluisce attraverso una routine intermedia che non ne sa nulla.

Scrivi una subroutine `log-it($msg)` che stampa il messaggio preceduto da una variabile dinamica `$*prefix`. Scrivi una seconda subroutine `task` che semplicemente chiama `log-it('working')` — e non menziona mai `$*prefix`. Poi chiama `task` due volte, ogni volta dall'interno di un blocco che imposta `$*prefix` a un valore diverso (`INFO`, poi `DEBUG`).

## Esempio

Il programma stampa:

```
INFO: working
DEBUG: working
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
