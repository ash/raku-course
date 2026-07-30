---
title: 'Solution: Der Wert von e'
---

{% include menu.html %}

## Haftungsausschluss

In Raku gibt es eine eingebaute Konstante `e`, die die sofortige Antwort auf die Aufgabe liefert. Die unten gezeigte Lösung ist zu Bildungszwecken gedacht.

## Code

Die Formel in dieser Aufgabe enthält eine Fakultät, und wir haben bereits mindestens zwei Lösungen, um sie zu berechnen (weitere folgen). Das folgende Programm definiert zwei Funktionen: eine zur Berechnung der Fakultät und eine weitere für die Teilsumme gemäß der Formel.

Da es erforderlich ist, dass die Funktion ohne Argumente aufgerufen werden kann, in welchem Fall sie eine vordefinierte Anzahl von Iterationen ausführt, können wir einen [Standardwert](/de/essentials/functions/default-values) des Parameters hinzufügen: `sub e-approx($max = 100)`.

Beachten Sie im Code die Ähnlichkeiten, wie die Ergebniswerte in einer [postfix `for` Schleife](/de/essentials/loops/postfix-for) über einen [Bereich](/de/essentials/ranges) akkumuliert werden.

Hier ist die Lösung:

```raku
sub factorial($n) {
    my $f = 1;
    $f *= $_ for 1..$n;

    return $f;
}

sub e-approx($max = 100) {
    my $e = 1;
    $e += 1 / factorial($_) for 1..$max;

    return $e;
}

say e-approx(10);
say e-approx();
```

🦋 Finden Sie das Programm in der Datei [the-value-of-e.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/the-value-of-e.raku).

## Ausgabe

Mit 10 und 100 Iterationen erhalten wir die folgenden Ergebnisse. Versuchen Sie auch andere Werte für `$max`.

```console
$ raku exercises/functions/the-value-of-e.raku
2.7182818
2.718281828459045
```

{% include nav.html %}