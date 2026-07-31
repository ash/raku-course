---
title: 'Un avviso con `note`'
translations_gpt:
---

{% include menu.html %}

## Problema

Un programma elabora un valore che risulta essere negativo. Usa `note` per mandare un avviso all'errore standard quando il valore è minore di zero, e `say` per mandare il risultato vero — il suo valore assoluto — all'output standard. Usa il valore `-3`.

## Esempio

Sullo schermo compaiono entrambe le righe:

```
Warning: the value is negative
3
```

Se l'errore standard viene scartato, resta solo il risultato:

```
$ raku note-a-warning.raku 2>/dev/null
3
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
