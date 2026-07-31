---
title: Due funzioni in un modulo
translations_gpt: Esercizio 'Due funzioni in un modulo'
---

{% include menu.html %}

## Problema

Crea un modulo chiamato `Calc`, in un file `Calc.rakumod`, che esporti due subroutine: `add` e `mul`, che restituiscono la somma e il prodotto dei loro due argomenti.

Poi scrivi un programma separato che usa il modulo per stampare `add(3, 4)` e `mul(3, 4)`, ciascuno sulla propria riga.

## Esempio

Eseguendo con il modulo nel percorso di ricerca, il programma stampa:

```console
$ raku -I. calc.raku
7
12
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
