---
title: Lösung von ‘Pluralendung’
---

{% include menu.html %}

Das Programm sollte überprüfen, ob die eingegebene Zahl größer als eins ist und sie in die Pluralform setzen.

## Code

```raku
my $n = prompt 'Wie viele Dateien sollen kopiert werden? ';
my $ending = $n == 1 ?? '' !! 's';
say "$n Datei{$ending} kopiert.";
```

🦋 Finde das Programm in der Datei [plural-ending.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/plural-ending.raku).

## Ausgabe

Führen Sie das Programm mindestens zweimal aus und testen Sie es mit der Eingabe `1` und mit einer anderen positiven ganzen Zahl:

```console
$ raku exercises/conditional-checks/plural-ending.raku
Wie viele Dateien sollen kopiert werden? 10
10 Dateien kopiert.

$ raku exercises/conditional-checks/plural-ending.raku
Wie viele Dateien sollen kopiert werden? 1
1 Datei kopiert.
```

## Kommentar

Sie neigen möglicherweise dazu, versehentlich ein einzelnes `?` anstelle eines doppelten `??` und/oder einen Doppelpunkt `:` anstelle von `!!` einzugeben.

{% include nav.html %}