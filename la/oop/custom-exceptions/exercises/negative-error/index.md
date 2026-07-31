---
title: Error numeri negativi
translations_gpt:
---

{% include menu.html %}

## Problema

Define classem exceptionis propriae `Negative` quae ab `Exception` heredat, attributum `n` habet, et cuius methodus `message` reddit `<n> is negative`.

Scribe subprogramma `check($n)` quod `Negative` iacit (illud `n` ferens) cum argumentum eius infra nihil est, et aliter argumentum reddit. Deinde, in clausula, voca `check(-5)` et utere fasi `CATCH` cum `when Negative` ut nuntium exceptionis imprimas.

Denique, post clausulam, iace alteram `Negative` (cum `n` valente `-10`) ut ostendas exceptionem ibi iactam ubi nulla `CATCH` eam custodit programma finire.

## Exemplum

Programma imprimit:

```
-5 is negative
-10 is negative
  in block <unit> at negative-error.raku line 24
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
