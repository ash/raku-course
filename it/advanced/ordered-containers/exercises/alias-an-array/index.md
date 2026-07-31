---
title: Alias di un array
translations_gpt:
---

{% include menu.html %}

## Problema

Ti viene dato un array:

```raku
my @original = 10, 20, 30;
```

Crea un secondo nome, `@alias`, che si riferisca allo _stesso_ array (non copiarlo). Questa volta, aggiungi con `push` un nuovo elemento a `@original`, e poi stampa `@alias` per mostrare che l'alias vede non solo le modifiche ai valori ma anche quelle strutturali.

## Esempio

Il programma stampa:

```
[10 20 30 40]
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
