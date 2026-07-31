---
title: Fra parentesi
translations_gpt:
---

{% include menu.html %}

## Problema

Combina un lookbehind e un lookahead per riconoscere un importo in **dollari interi**: le cifre che vengono subito dopo un `$` e **non** sono seguite da un punto decimale. Quindi `$50` corrisponde (`50`), ma `$3.99` no — ha i centesimi.

Usa un lookbehind positivo per `$` e un lookahead negativo per `.`, e aggiungi un confine di parola `>>` dopo le cifre così che venga riconosciuto tutto il numero. Stampa la corrispondenza per `'$50'`.

## Esempio

Il programma stampa:

```
｢50｣
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
