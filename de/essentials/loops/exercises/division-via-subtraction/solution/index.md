---
title: 'Lösung: Division durch Subtraktion'
---

{% include menu.html %}

Die Division ist wiederholte Subtraktion. Das Programm hat eine `while`-Schleife, die `$a` um den Wert von `$b` reduziert und dies wiederholt, solange der aktuelle Wert von `$a` nicht kleiner als `$b` ist. Die Variable `$n` zählt die Anzahl der Iterationen und ist auch das Ergebnis, das wir benötigen.

## Code

Hier ist das vollständige Programm:

```raku
my $a = 175;
my $b = 25;

my $n = 0;
while $a >= $b {
    $a -= $b;
    $n++;
}

say $n;
```

🦋 Finde das Programm in der Datei [division-via-subtraction.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/division-via-subtraction.raku).

## Ausgabe

Führen Sie das Programm ein paar Mal aus. Beginnen Sie mit den angegebenen Werten, die eine genaue ganze Zahl ergeben:

```console
$ raku exercises/loops/division-via-subtraction.raku
7
```

Versuchen Sie auch, zum Beispiel, `$b` auf `20` zu ändern und bestätigen Sie, dass das Ergebnis korrekt ist:

```console
$ raku exercises/loops/division-via-subtraction.raku
8
```

{% include nav.html %}