---
title: Lösung von 'Eine Reihe von Zahlen drucken'
---

{% include menu.html %}

Es gibt mehr als einen Weg, das gegebene Problem zu lösen.

## Code 1

Die erste Lösung ist mehr Raku-typisch und kompakt.

```raku
my $begin = prompt 'Begin: ';
my $end = prompt 'End: ';

.say for $begin .. $end;
```

🦋 Finde das Programm in der Datei [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers.raku).

## Code 2

Die zweite mögliche Lösung kann die `loop`-Anweisung verwenden.

```raku
my $begin = prompt 'Begin: ';
my $end = prompt 'End: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Finde das Programm in der Datei [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers-loop.raku).

Wie Sie sehen können, ist die erste Variante deutlich kürzer und ausdrucksstärker.

## Diskussion

In der ersten Variante des Programms wird die [postfixe Form der `for`-Schleife](/de/essentials/loops/postfix-for) verwendet. Im zweiten Programm wird eine `loop`-Schleife gewählt.

## Ausgabe

Geben Sie die beiden Zahlen in der Konsole ein und führen Sie das Programm aus. Beide Varianten erzeugen die gleiche Ausgabe.

```console
$ raku exercises/positionals/series-of-numbers.raku
Begin: 15
End: 19
15
16
17
18
19
```

{% include nav.html %}