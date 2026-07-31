---
title: 'Solution: Usare un modulo di statistiche'
translations_gpt: La soluzione di 'Usare un modulo di statistiche'
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

Il programma, `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Puoi trovare entrambi i file sorgente nella directory [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module).

## Output

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Commenti

1. Un singolo `use Stats` importa *entrambe* le subroutine esportate in una volta — `use` importa tutto cio che il modulo contrassegna con `is export`, non solo un nome.

1. `mean` chiama `total` all'interno del modulo. Il programma non chiama `total` per conto proprio li, eppure funziona: le subroutine di un modulo possono fare affidamento l'una sull'altra, e il chiamante vede solo i nomi esportati.

1. Con quattro numeri che sommano a `100`, la media e `100 / 4`, cioe `25`.

{% include nav.html %}
