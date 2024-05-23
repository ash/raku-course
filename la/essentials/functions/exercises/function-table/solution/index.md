---
title: 'Solutio: Tabula functionis'
---

{% include menu.html %}

Hic programma est, probabiliter, bonum exemplum utendi `loop` circulo. Cum eo, potes ponere et margines et gradum directe in unitatibus quibus opus est. Nota quod ad hanc quaestionem redire potes postquam discis Raku _sequentias_.

## Codex

Hic est solutio:

```raku
sub f($x) { $x² }

loop (my $x = -3; $x <= 3; $x += 0.1) {
    say "$x\t{f($x)}";
}
```

🦋 Inveni programma in archivo [function-table.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-table.raku).

## Output

Programma longam tabulam x — f(x) imprimit. Pars huius output hic ostenditur:

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

## Visualisatio

Sapienter est output cum aliquo externo programmate visualizare, exempli gratia, Excel vel gnuplot.

<img src="../f-graph.png" style="width: 500px; height: auto" />

{% include nav.html %}