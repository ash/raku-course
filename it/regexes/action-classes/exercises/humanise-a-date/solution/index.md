---
title: 'Soluzione: Rendete leggibile una data'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
grammar Date {
    token TOP   { <year> '-' <month> '-' <day> }
    token year  { \d ** 4 }
    token month { \d ** 2 }
    token day   { \d ** 2 }
}

class Humanise {
    method year($/)  { make $/.Int }
    method month($/) { make <January February March April May June
                             July August September October November December>[$/ - 1] }
    method day($/)   { make $/.Int }
    method TOP($/)   { make "{$<day>.made} {$<month>.made} {$<year>.made}" }
}

say Date.parse('2026-07-05', actions => Humanise.new).made;
```

🦋 Trova il programma nel file [humanise-a-date.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/humanise-a-date.raku).

## Output

```
5 July 2026
```

## Commenti

1. A differenza di una semplice azione aritmetica, i metodi dei token producono valori di **generi diversi**: `year` e `day` producono interi, ma `month` produce una *stringa* usando il proprio valore numerico come indice in un elenco di nomi di mesi. `$/ - 1` converte in numero la corrispondenza di due cifre (`07` → `7`) e passa a un indice che parte da zero, quindi il `month` `07` produce `July`.

1. Il metodo `TOP` non riesamina mai il testo grezzo. Legge soltanto i tre valori che i sottometodi hanno già prodotto — `$<day>.made`, `$<month>.made`, `$<year>.made` — e li interpola nella stringa finale. Rileggere `5` da `day` fa cadere gratis anche lo zero iniziale.

1. È questo il lavoro quotidiano di una classe di azioni: analizzare una volta l'input strutturato, poi lasciare che ogni metodo trasformi il proprio pezzo in ciò che serve al resto del programma.

{% include nav.html %}
