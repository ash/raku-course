---
title: Cercare un simbolo
translations_gpt:
---

{% include menu.html %}

## Problema

Oltre a elencare i nomi di un package, è possibile raggiungere un nome in modo dinamico usandolo come chiave nello stash del package. Ti viene dato un modulo `Circle.rakumod`:

```raku
unit module Circle;

our $pi = 3.14;
```

Scrivi un programma separato che carica il modulo e stampa il valore di `$pi` cercandolo nello stash con `Circle::{'$pi'}` — non con il qualificato `$Circle::pi`.

## Esempio

Eseguendo il programma con il modulo nel percorso di ricerca, il programma stampa:

```console
$ raku -I. lookup.raku
3.14
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
