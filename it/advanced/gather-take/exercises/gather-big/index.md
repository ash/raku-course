---
title: Raccogliere fino al pieno
translations_gpt:
---

{% include menu.html %}

## Problema

Itera su un ampio intervallo di numeri, da `1` a `100`, e continua a prenderli — ma fermati non appena il loro totale progressivo supererebbe `10`. Stampa la lista dei numeri raccolti.

Questo e qualcosa che `grep` non puo fare, perche e necessario interrompere il ciclo a meta. Con `gather` e `take` si puo: usa `last` per uscire dal ciclo nel momento in cui il limite viene raggiunto, indipendentemente da quanti numeri restano.

## Esempio

Il programma stampa:

```
[1 2 3 4]
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
