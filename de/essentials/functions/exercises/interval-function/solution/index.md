---
title: 'Solution: Intervallfunktion'
---

{% include menu.html %}

In dieser Funktion wird eine dreigliedrige `if`-Konstruktion verwendet. Die ersten beiden Zweige haben einen Booleschen Test, aber die dritte Überprüfung ist nicht notwendig, da es die einzige verbleibende Option ist, wenn die Zahl keinen der ersten beiden Tests bestanden hat.

## Code

Hier ist die Lösung:

```raku
sub f($x) {
    if    $x > 0  { return $x - 0.5 }
    elsif $x == 0 { return 0 }
    else          { return -$x }
}

say f(-2);
say f(0);
say f(3);
```

🦋 Finde das Programm in der Datei [interval-function.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/interval-function.raku).

## Ausgabe

```console
$ raku exercises/functions/interval-function.raku
2
0
2.5
```

{% include nav.html %}