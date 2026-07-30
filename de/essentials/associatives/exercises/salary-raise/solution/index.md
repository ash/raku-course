---
title: 'Solution: Gehaltserhöhung'
---

{% include menu.html %}

Das Programm muss einen der Werte des gegebenen Hashes aktualisieren. Das Zuweisen eines neuen Wertes unterscheidet sich nicht wesentlich vom Setzen eines neuen Wertes einer skalaren Variablen.

## Code

Hier ist die Lösung:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Vertrieb',
    salary => 3000;

my $raise = 5; # in Prozent

%employee<salary> *= (1 + $raise / 100);
say "Neues Gehalt von %employee<full-name>: %employee<salary>";
```

🦋 Finde das Programm in der Datei [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/salary-raise.raku).

## Ausgabe

Beim Ausführen des Programms stellen Sie sicher, dass Sie gültige Berechnungen durchgeführt und die Anzahl der Prozente korrekt umgerechnet haben.

```console
$ raku exercises/associatives/salary-raise.raku
Neues Gehalt von Eliza Vents: 3150
```

{% include nav.html %}