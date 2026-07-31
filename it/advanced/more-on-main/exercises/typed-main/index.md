---
title: Un MAIN tipizzato
translations_gpt:
---

{% include menu.html %}

## Problema

Un vincolo di tipo su un parametro di `MAIN` viene verificato prima dell'esecuzione del corpo. Scrivi un programma il cui `MAIN` accetta un singolo `Int $n` e stampa il doppio di `$n`. Se l'argomento non e un intero valido, la firma non corrisponde e Raku stampa il messaggio di utilizzo al suo posto: la validazione e gratuita.

## Esempio

```console
$ raku typed-main.raku 5
10

$ raku typed-main.raku abc
Usage:
  typed-main.raku <n>
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
