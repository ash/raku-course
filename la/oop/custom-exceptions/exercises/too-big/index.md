---
title: Nimis magnum
translations_gpt:
---

{% include menu.html %}

## Problema

Define classem exceptionis propriae `TooBig` quae ab `Exception` heredat et duo attributa habet, `value` et `limit`. Methodus eius `message` reddere debet `Value <value> exceeds the limit of <limit>`.

Deinde percurre valores `30`, `99` et `60` cum limite `50`. Pro unoquoque valore iace `TooBig` solum cum valor limitem excedit, et utere fasi `CATCH` cum `when TooBig` quae nuntium imprimit **et**, altera linea, attributum `limit` exceptionis directe legit ut `Try a value up to <limit>.` imprimat. Valor intra limitem simpliciter nuntiare debet se bene se habere.

Hoc ostendit exceptionem solum pro numeris deficientibus excitari; ceteri recta transeunt, et anulus utroque modo pergit.

## Exemplum

Programma imprimit:

```
Value 30 is within the limit
Value 99 exceeds the limit of 50
Try a value up to 50.
Value 60 exceeds the limit of 50
Try a value up to 50.
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}
