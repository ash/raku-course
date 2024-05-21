---
title: 'Risinājums: Funkcijas tabula'
---

{% include menu.html %}

Šī programma, iespējams, ir labs piemērs `loop` cikla izmantošanai. Ar to jūs varat iestatīt gan robežas, gan soli tieši tajās vienībās, kas jums nepieciešamas. Ņemiet vērā, ka jūs varat atgriezties pie šī uzdevuma vēlāk, pēc tam, kad būsiet apguvis Raku _sekvences_.

## Kods

Šeit ir risinājums:

```raku
sub f($x) { $x² }

loop (my $x = -3; $x <= 3; $x += 0.1) {
    say "$x\t{f($x)}";
}
```

🦋 Atrodiet programmu failā [function-table.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-table.raku).

## Izvade

Programma izdrukā garu x — f(x) tabulas sarakstu. Daļa no šīs izvades ir parādīta šeit:

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

## Vizualizācija

Ir prātīgi vizualizēt izvadi ar kādu ārēju programmu, piemēram, Excel vai gnuplot.

<img src="../f-graph.png" style="width: 500px; height: auto" />

{% include nav.html %}