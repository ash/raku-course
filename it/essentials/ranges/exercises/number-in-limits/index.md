---
title: 'Esercizio: Se il numero è entro i limiti'
---

{% include menu.html %}

## Problema

Scrivi un programma che chiede di inserire tre numeri: `$begin`, `$end` e `$n` e stampa `True` o `False` a seconda se `$n` è nell'intervallo `[$begin, $end)` (incluso `$begin` ma escluso `$end`).

Si prega di assumere che i numeri inseriti soddisfano la condizione: `$begin < $end + 1`, ma non aggiungere codice per verificarlo.

## Esempio

Il possibile output del programma per entrambi i casi è mostrato di seguito:

```console
$ raku number-in-limits.raku
Da (incluso): 10
A (escluso): 20
Qual è il numero? 15
True

$ raku number-in-limits.raku
Da (incluso): 10
A (escluso): 20
Qual è il numero? 30
False
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}