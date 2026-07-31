---
title: Ereditate una grammatica
translations_gpt:
---

{% include menu.html %}

## Problema

Scrivi una grammatica base `Animal` il cui `TOP` riconosce un token `sound` (una parola qualunque). Poi scrivi due grammatiche che ne ereditano: `Dog`, che sovrascrive `sound` perché riconosca `woof`, e `Cat`, che lo sovrascrive perché riconosca `meow`. Analizza `'woof'` con `Dog`, `'meow'` con `Cat` e — per mostrare che ciascuna conserva il proprio verso — anche `'meow'` con `Dog`. Stampa se ciascuna analisi è riuscita.

## Esempio

Il programma stampa:

```
True
True
False
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
