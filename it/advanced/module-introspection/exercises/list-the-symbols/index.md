---
title: Elencare i simboli
translations_gpt:
---

{% include menu.html %}

## Problema

Ti viene dato un modulo nel file `Circle.rakumod` che definisce due variabili `our`:

```raku
unit module Circle;

our $pi = 3.14;
our $tau = 6.28;
```

Scrivi un programma che usa il modulo e stampa, prima, quanti nomi sono definiti nel package del modulo, e poi i nomi stessi in ordine alfabetico.

## Esempio

```console
$ raku -I. list.raku
2
($pi $tau)
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
