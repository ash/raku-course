---
title: 'Solution: Tabella delle funzioni'
---

{% include menu.html %}

Questo programma è, probabilmente, un buon esempio di utilizzo del ciclo `loop`. Con esso, puoi impostare sia i limiti che il passo direttamente nelle unità di cui hai bisogno. Nota che puoi tornare a questo compito più tardi dopo aver imparato le _sequenze_ di Raku.

## Codice

Ecco la soluzione:

```raku
sub f($x) { $x² }

loop (my $x = -3; $x <= 3; $x += 0.1) {
    say "$x\t{f($x)}";
}
```

🦋 Trova il programma nel file [function-table.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/function-table.raku).

## Output

Il programma stampa una lunga lista della tabella x — f(x). Una parte di questo output è mostrata qui:

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

## Visualizzazione

È saggio visualizzare l'output con qualche programma esterno, ad esempio, Excel o gnuplot.

<img src="../f-graph.png" style="width: 500px; height: auto" />

{% include nav.html %}