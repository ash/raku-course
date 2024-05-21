---
title: 'Lösung: Funktion zur Berechnung von xʸ'
---

{% include menu.html %}

In diesem Programm wird der `**` Operator verwendet, um die Potenz zu berechnen.

## Code

Hier ist die Lösung:

```raku
sub f($x, $y) { $x ** $y }

say f(5, 3);
say f(2, 10);
say f(-4, 5);
```

🦋 Finde das Programm in der Datei [function-x-to-the-power-of-y.raku](https://github.com/ash/raku-course/blob/master/exercises/functions/function-x-to-the-power-of-y.raku).

## Ausgabe

Führen Sie das Programm aus, um zu bestätigen, dass es die richtigen Antworten ausgibt:

```console
$ raku exercises/functions/function-x-to-the-power-of-y.raku
125
1024
-1024
```

## Kommentar

Diese Funktion funktioniert auch mit negativen Potenzen, zum Beispiel:

```raku
say f(5, -1);  # 0.2
say f(10, -2); # 0.01
```

{% include nav.html %}