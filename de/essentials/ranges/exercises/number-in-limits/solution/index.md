---
title: 'Lösung: Wenn die Zahl innerhalb der Grenzen liegt'
---

{% include menu.html %}

Das Programm verwendet einen Bereich, der aus den Zahlen erstellt wird, die der Benutzer eingibt. Dann prüft der Smartmatch-Test, ob die dritte Zahl innerhalb der Bereichsgrenzen liegt. Das Ergebnis des Smartmatch-Tests ist ein Boolescher Wert, sodass wir es sofort ausdrucken können.

## Code

Hier ist die Lösung:

```raku
my $begin = prompt 'Von (einschließlich): ';
my $end = prompt 'Bis (ausschließlich): ';

my $n = prompt 'Was ist die Zahl? ';

say $n ~~ $begin ..^ $end;
```

🦋 Finde das Programm in der Datei [number-in-limits.raku](https://github.com/ash/raku-course/blob/master/exercises/ranges/number-in-limits.raku).

## Ausgabe

Teste verschiedene Fälle, einschließlich wenn die Zahl mit dem Ende des Bereichs übereinstimmt.

```console
$ raku exercises/ranges/number-in-limits.raku
Von (einschließlich): 1
Bis (ausschließlich): 2
Was ist die Zahl? 1.5
True

$ raku exercises/ranges/number-in-limits.raku
Von (einschließlich): 100
Bis (ausschließlich): 200
Was ist die Zahl? 100
True

$ raku exercises/ranges/number-in-limits.raku
Von (einschließlich): -5
Bis (ausschließlich): -2
Was ist die Zahl? -2
False
```

## Kommentar

Beachte, wie der rechte Endpunkt des Bereichs ausgeschlossen wird: `$begin ..^ $end`.

{% include nav.html %}