---
title: Lösung für „Apfel teilen“
---

{% include menu.html %}

Hier ist die Lösung für das Problem.

## Code

```raku
my $N = 3;
my $K = 11;

my $gets = $K div $N;
my $remains = $K % $N;

say "Jede Person bekommt $gets Apfel/Äpfel.";
say "Es bleiben $remains Apfel/Äpfel übrig.";
```

🦋 Du findest den vollständigen Code in der Datei [apple-sharing.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/apple-sharing.raku).

## Ausgabe

Mit den Eingabewerten 3 und 11 gibt das Programm folgende Ausgabe:

```console
$ raku exercises/numbers/apple-sharing.raku
Jede Person bekommt 3 Apfel/Äpfel.
Es bleiben 2 Apfel/Äpfel übrig.
```

Ändere die Anfangswerte von `$N` und `$K`, um andere Situationen zu modellieren:

* `$K` ist ein Vielfaches von `$N`, zum Beispiel `12` und `3`;
* `$K` ist gleich `$N`;
* `$K` ist kleiner als `$N`.

## Kommentare

Im Programm verwenden wir die beiden Operatoren: `div` für die Ganzzahldivision und `%` um den Rest der Division zu erhalten. Alternativ kannst du die Berechnungen wie folgt durchführen:

```raku
my $gets = $K div $N;
my $remains = $K - $N * $gets;
```

Beachte auch, wie die Variablen in den String interpoliert werden.

{% include nav.html %}