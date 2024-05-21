---
title: Lösung der 'Fibonacci-Zahlen'
---

{% include menu.html %}

Der folgende Algorithmus definiert Fibonacci-Zahlen.

1. _F<sub>0</sub>_ = 0, _F<sub>0</sub>_ = 1
2. _F<sub>n</sub>_ = _F<sub>n-1</sub>_ + _F<sub>n-2</sub>_

## Code

Der Code implementiert den Algorithmus wörtlich. Er verwendet ein paar Variablen, um die aktuellen zwei Fibonacci-Zahlen zu speichern und aktualisiert sie in einer Schleife. Beachten Sie, dass beide Variablen [in einer einzigen Zuweisung](/de/essentials/scalar-variables/assigning-a-value/#multiple-assignment) aktualisiert werden.

```raku
my $a = 0;
my $b = 1;

say $a;
for ^19 {
    ($a, $b) = $b, $a + $b;
    say $a;
}
```

🦋 Finden Sie das Programm in der Datei [fibonacci-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fibonacci-numbers.raku).

## Ausgabe

Hier ist die Ausgabe des Programms, das die ersten 20 Zahlen ausgibt.

```console
$ raku exercises/loops/fibonacci-numbers.raku
0
1
1
2
3
5
8
13
21
34
55
89
144
233
377
610
987
1597
2584
4181
```

## Mehr zu diesem Thema

Merken Sie sich diese Aufgabe, da wir in Zukunft darauf zurückkommen werden, um eine weitere spannende Lösung mit Raku _Sequenzen_ zu erhalten.

{% include nav.html %}