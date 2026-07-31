---
title: 'Solvo: Funkcia tabelo'
---

{% include menu.html %}

Ĉi tiu programo estas, probable, bona ekzemplo de uzado de la `loop` buklo. Per ĝi, vi povas agordi ambaŭ la randojn kaj la paŝon rekte en la unuoj kiujn vi bezonas. Notu, ke vi povas reveni al ĉi tiu tasko poste post lernado de Raku _sekvencoj_.

## Kodo

Jen la solvo:

```raku
sub f($x) { $x² }

loop (my $x = -3; $x <= 3; $x += 0.1) {
    say "$x\t{f($x)}";
}
```

🦋 Trovu la programon en la dosiero [function-table.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/function-table.raku).

## Eligo

La programo presas longan liston de la x — f(x) tabelo. Parto de ĉi tiu eligo estas montrita ĉi tie:

```console
$ raku exercises/functions/function-table.raku
-3	9
-2.9	8.41
-2.8	7.84

. . .

-0.2	0.04
-0.1	0.01
0	0
0.1	0.01
0.2	0.04

. . .

2.7	7.29
2.8	7.84
2.9	8.41
3	9
```

## Vizualigo

Estas saĝe vizualigi la eligon per iu ekstera programo, ekzemple, Excel aŭ gnuplot.

<img src="../f-graph.png" style="width: 500px; height: auto" />

{% include nav.html %}