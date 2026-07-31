---
title: Usare un modulo di statistiche
translations_gpt: Esercizio 'Usare un modulo di statistiche'
---

{% include menu.html %}

## Problema

Ti viene dato un modulo `Stats.rakumod` che esporta due subroutine — `total` e `mean` — dove `mean` si basa su `total`:

```raku
unit module Stats;

sub total(@numbers) is export {
    [+] @numbers
}

sub mean(@numbers) is export {
    total(@numbers) / @numbers.elems
}
```

Scrivi un programma separato che usi questo modulo e, per la lista `10, 20, 30, 40`, stampi sia il totale che la media.

## Esempio

Eseguendo con il modulo nel percorso di ricerca, il programma stampa:

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}
