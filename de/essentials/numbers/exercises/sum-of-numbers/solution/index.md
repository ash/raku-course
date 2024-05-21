---
title: Lösung für 'Summe der Zahlen'
---

{% include menu.html %}

Hier ist die Lösung für das Problem.

## Code

```raku
my $a = prompt 'Geben Sie die Zahl A ein: ';
my $b = prompt 'Geben Sie die Zahl B ein: ';
my $c = prompt 'Geben Sie die Zahl C ein: ';

my $sum = $a + $b + $c;

say "Die Summe der Zahlen ist $sum.";
```

🦋 Den vollständigen Code finden Sie in der Datei [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum-of-numbers.raku).

## Ausgabe

Führen Sie das Programm ein paar Mal aus und bestätigen Sie, dass es mit Zahlen verschiedener Art funktioniert.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Geben Sie die Zahl A ein: 1.2
Geben Sie die Zahl B ein: -3.4
Geben Sie die Zahl C ein: 45
Die Summe der Zahlen ist 42.8.
```

## Kommentare

Beachten Sie, dass wir den von der `prompt`-Routine zurückgegebenen Wert direkt verwenden. Das kann Probleme verursachen, wenn der Benutzer eine Zeichenkette eingibt, die keinen Wert darstellt. Wir können das Programm in Zukunft verbessern, nachdem wir etwas über Ausnahmen gelernt haben.

{% include nav.html %}