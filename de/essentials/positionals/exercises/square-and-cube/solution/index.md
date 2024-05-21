---
title: Lösung von ‘Quadrate und Kuben’
---

{% include menu.html %}

## Code 1

Eine einfache Lösung ist die Verwendung des `**` Operators.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Finde das Programm in der Datei [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube.raku).

## Code 2

Eine etwas stilvollere Lösung ist die Verwendung von Unicode-Hochzahlen.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Finde das Programm in der Datei [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube-2.raku).

## Ausgabe

Führe das Programm ein paar Mal aus und teste es mit verschiedenen Zahlen.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}