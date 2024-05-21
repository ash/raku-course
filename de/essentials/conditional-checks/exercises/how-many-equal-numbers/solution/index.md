---
title: 'Lösung: Wie viele Zahlen sind gleich?'
---

{% include menu.html %}

Das Programm sollte einige Vergleiche anstellen. Für drei Eingabezahlen gibt es zwei mögliche Fälle:

1. Alle drei Zahlen sind gleich,
1. Nur zwei Zahlen sind gleich, und
1. Alle Zahlen sind unterschiedlich.

## Code

Hier ist die Lösung mit expliziten Vergleichen.

```raku
my $n1 = prompt 'Geben Sie Zahl 1 ein: ';
my $n2 = prompt 'Geben Sie Zahl 2 ein: ';
my $n3 = prompt 'Geben Sie Zahl 3 ein: ';

if $n1 == $n2 == $n3 {
    say 3;
}
elsif $n1 == $n2 || $n2 == $n3 || $n1 == $n3 {
    say 2;
}
else {
    say 0;
}
```

🦋 Finden Sie das Programm in der Datei [how-many-equal-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/how-many-equal-numbers.raku).

## Ausgabe

```console
$ raku exercises/conditional-checks/how-many-equal-numbers.raku 0 0 0
Geben Sie Zahl 1 ein: 14
Geben Sie Zahl 2 ein: 8
Geben Sie Zahl 3 ein: 8
2

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Geben Sie Zahl 1 ein: 15
Geben Sie Zahl 2 ein: 15
Geben Sie Zahl 3 ein: 15
3

$ raku exercises/conditional-checks/how-many-equal-numbers.raku 
Geben Sie Zahl 1 ein: 4
Geben Sie Zahl 2 ein: 6
Geben Sie Zahl 3 ein: 8
0
```

## Kommentare

1. Beachten Sie, dass Sie drei Zahlen in einem einzigen Ausdruck vergleichen können: `$n1 == $n2 == $n3`.
1. Kehren Sie zu dieser Aufgabe zurück und lösen Sie sie erneut, nachdem Sie den Reduktionsoperator kennengelernt haben.

{% include nav.html %}