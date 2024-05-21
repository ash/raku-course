---
title: 'Lösung: Drucke die Summe'
---

{% include menu.html %}

Dieses Programm besteht aus einer einzigen `MAIN`-Funktion, die zwei typisierte Argumente annimmt, die beide aus den Argumenten der Befehlszeile erstellt werden.

## Code

Hier ist die Lösung:

```raku
sub MAIN(Int $a, Int $b) {
    say $a + $b;
}
```

🦋 Finde das Programm in der Datei [print-the-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/the-main-function/print-the-sum.raku).

## Ausgabe

Versuche verschiedene Eingabezahlen:

```console
$ raku exercises/the-main-function/print-the-sum.raku 500 700
1200
```

Du kannst auch versuchen, das Programm ohne Argumente oder mit Argumenten unterschiedlichen Typs auszuführen und sehen, was passiert. Wir werden diese Fälle im zweiten Teil des Kurses behandeln.

{% include nav.html %}