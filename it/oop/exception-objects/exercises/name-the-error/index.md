---
title: "Indicate l'errore"
translations_gpt:
---

{% include menu.html %}

## Problema

Scrivi una subroutine `risky` che fa `die 'sub failed'`. Poi chiamala dall'interno di un blocco che ha un phaser `CATCH`. Il `CATCH` deve stampare il nome del tipo dell'eccezione (con `.^name`) e poi il suo messaggio (con `.message`). Questo mostra che `CATCH` gestisce le eccezioni sollevate dal codice che il blocco *chiama*, non solo dal `die` scritto direttamente nel blocco.

## Esempio

Il programma stampa:

```
X::AdHoc
sub failed
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
