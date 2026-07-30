---
title: 'Solution: Ein Statistik-Modul verwenden'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

Das Programm, `stats.raku`:

```raku
use Stats;

my @scores = 10, 20, 30, 40;

say "total: { total(@scores) }";
say "mean: { mean(@scores) }";
```

🦋 Du findest die Quelldateien im Verzeichnis [exercises/advanced/modules-basics/stats-module](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/stats-module).

## Ausgabe

```console
$ raku -I. stats.raku
total: 100
mean: 25
```

## Kommentare

1. Ein einzelnes `use Stats` bringt *beide* exportierten Subroutinen auf einmal ein — `use` importiert alles, was das Modul mit `is export` markiert, nicht nur einen Namen.

1. `mean` ruft `total` innerhalb des Moduls auf. Das Programm ruft `total` dort nicht selbst auf, dennoch funktioniert es: Die Subroutinen eines Moduls können aufeinander aufbauen, und der Aufrufer sieht nur die exportierten Namen.

1. Bei vier Zahlen, die sich zu `100` addieren, ist der Durchschnitt `100 / 4`, also `25`.

{% include nav.html %}
