---
title: Entrare in un blocco
---

{% include menu.html %}

## Problema

A differenza di `FIRST`, che viene eseguito una sola volta, un phaser `ENTER` viene attivato *ogni volta* che si entra nel blocco, e il corpo di un ciclo viene rieseguito ad ogni iterazione.

Itera su `1..2`. All'interno del ciclo, inserisci un phaser `ENTER` che stampa `--entering` e un'istruzione ordinaria che stampa `body` con il numero corrente. Osserva che `--entering` appare una volta per iterazione.

## Esempio

Il programma stampa:

```
--entering
body 1
--entering
body 2
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
