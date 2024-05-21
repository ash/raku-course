---
title: 'Oplossing: Functietabel'
---

{% include menu.html %}

Dit programma is waarschijnlijk een goed voorbeeld van het gebruik van de `loop` lus. Hiermee kun je zowel de randen als de stap direct instellen in de eenheden die je nodig hebt. Let op dat je later naar deze taak kunt terugkeren na het leren van Raku _reeksen_.

## Code

Hier is de oplossing:

```raku
sub f($x) { $x² }

loop (my $x = -3; $x <= 3; $x += 0.1) {
    say "$x\t{f($x)}";
}
```

🦋 Vind het programma in het bestand [function-table.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-table.raku).

## Uitvoer

Het programma print een lange lijst van de x — f(x) tabel. Een deel van deze uitvoer wordt hier getoond:

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

## Visualisatie

Het is verstandig om de uitvoer te visualiseren met een extern programma, bijvoorbeeld Excel of gnuplot.

<img src="../f-graph.png" style="width: 500px; height: auto" />

{% include nav.html %}