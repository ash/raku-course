---
title: 'Solution: Funktionstabelle'
---

{% include menu.html %}

Dieses Programm ist wahrscheinlich ein gutes Beispiel für die Verwendung der `loop`-Schleife. Damit können Sie sowohl die Grenzen als auch den Schritt direkt in den benötigten Einheiten festlegen. Beachten Sie, dass Sie zu dieser Aufgabe später zurückkehren können, nachdem Sie Raku _Sequenzen_ gelernt haben.

## Code

Hier ist die Lösung:

```raku
sub f($x) { $x² }

loop (my $x = -3; $x <= 3; $x += 0.1) {
    say "$x\t{f($x)}";
}
```

🦋 Finden Sie das Programm in der Datei [function-table.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/function-table.raku).

## Ausgabe

Das Programm druckt eine lange Liste der x — f(x) Tabelle. Ein Teil dieser Ausgabe wird hier gezeigt:

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

## Visualisierung

Es ist ratsam, die Ausgabe mit einem externen Programm, zum Beispiel Excel oder gnuplot, zu visualisieren.

<img src="../f-graph.png" style="width: 500px; height: auto" />

{% include nav.html %}