---
title: Un array nativo
---

{% include menu.html %}

## Problema

L'uso naturale di un tipo nativo con dimensione fissa è un array compatto di byte. Dichiara un array `uint8` contenente i valori `100`, `200` e `255` — ciascuno sta in un singolo byte — e stampa la somma dei suoi elementi.

Nota che gli elementi restano nell'intervallo `0..255`, ma la loro somma non deve farlo: `.sum` restituisce un normale `Int`.

## Esempio

Il programma stampa:

```
555
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
