---
title: Forzare la valutazione eager
translations_gpt:
---

{% include menu.html %}

## Problema

Il prefisso `eager` fa l'opposto di `lazy`: forza una lista a essere completamente prodotta, in modo che non sia più lazy. Mostrate il contrasto con `.is-lazy`.

Stampate se l'intervallo infinito `1 .. Inf` è lazy, poi se `eager 1..3` è lazy, e infine se `lazy 1..3` è lazy. I risultati dovrebbero essere `True`, `False`, `True`.

## Esempio

Il programma stampa:

```
True
False
True
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
