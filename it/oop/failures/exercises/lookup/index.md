---
title: Trovato o non trovato
translations_gpt:
---

{% include menu.html %}

## Problema

Scrivi una subroutine `lookup` che restituisce `100` quando il suo argomento è `'a'`, e altrimenti chiama `fail` con il messaggio `no such key`.

Chiama `lookup('z')` e stampane il risultato se è definito. Se non lo è, stampa `not found` e, su una seconda riga, il motivo del fallimento preso dal `Failure` stesso (`reason: <messaggio>`).

## Esempio

Il programma stampa:

```
not found
reason: no such key
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
