---
title: Classificare la dimensione
translations_gpt:
---

{% include menu.html %}

## Problema

Scrivi tre multi-subroutine chiamate `size`, tutte con un parametro `Int`, che restituiscono `'small'`, `'medium'` o `'large'`. Classifica in base alla *grandezza* del numero, ignorando il segno: i numeri il cui valore assoluto e inferiore a `10` sono small, quelli inferiori a `100` sono medium, e tutto il resto e large. Usa una clausola `where` sui primi due candidati e lascia il terzo come raccoglitore generale.

Stampa il risultato di `size(7)`, `size(30)` e `size(-250)`.

## Esempio

Il programma stampa:

```
small
medium
large
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
