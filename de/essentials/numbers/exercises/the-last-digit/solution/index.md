---
title: 'Lösung: Die letzte Ziffer'
---

{% include menu.html %}

Die Idee der Lösung dieser Aufgabe ist es, die Modulo-Division durch 10 zu verwenden, um die letzte Ziffer der Zahl zu erhalten.

## Code

Hier ist die Lösung:

```raku
my $n = prompt 'Geben Sie eine Zahl ein: ';
my $d = $n % 10;
say "Die letzte Ziffer von $n ist $d.";
```

🦋 Finden Sie das Programm in der Datei [the-last-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/the-last-digit.raku).

## Ausgabe

Führen Sie das Programm aus und geben Sie eine positive ganze Zahl ein:

```console
$ raku exercises/numbers/the-last-digit.raku
Geben Sie eine Zahl ein: 1234
Die letzte Ziffer von 1234 ist 4.
```

## Kommentar

Beachten Sie, dass dies bei negativen Zahlen nicht wie erwartet funktioniert, da zum Beispiel `-11 % 10` `9` und nicht `1` ist.

{% include nav.html %}