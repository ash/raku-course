---
title: Rendete leggibile una data
translations_gpt:
---

{% include menu.html %}

## Problema

Scrivi una grammatica che analizza una data ISO come `'2026-07-05'` in tre token: `year`, `month` e `day`. Scrivi una **classe di azioni** in cui il metodo di ogni token produce con `make` un valore: `year` e `day` producono il proprio numero come intero, mentre `month` produce il **nome inglese del mese** (`1` → `January`, …, `12` → `December`). Il metodo `TOP` legge poi quei tre valori con `.made` e produce una stringa leggibile come `'5 July 2026'`. Analizza `'2026-07-05'` con la classe di azioni e stampa `.made`.

## Esempio

Il programma stampa:

```
5 July 2026
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
