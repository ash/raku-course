---
title: Lösung von 'Korrigiere die Bezeichner'
---

{% include menu.html %}

Es gibt mehr als eine Möglichkeit, die Bezeichner korrekt zu machen. Einige mögliche Optionen sind hier gezeigt:

## Code

```raku
my $AGE = 30;
my $Name = 'Valdis';
my $Middle'Name = 'C.';
my $address2 = 'Second street, 12';
my $from-to = 'London to Paris';
```

Alle Bezeichner sind gültig, aber es ist wahrscheinlich besser, Namen mit Apostrophen zu vermeiden, wenn Sie `$don't` keinen triftigen Grund haben, sie zu verwenden.

🦋 Den Quellcode finden Sie in der Datei [identifiers.raku](https://github.com/ash/raku-course/blob/master/exercises/scalar-variables/identifiers.raku).

## Ausgabe

Dieses Programm erzeugt keine Ausgabe, aber Sie sollten keine Fehler erhalten, wenn Rakudo es kompiliert und ausführt:

```console
$ raku exercises/scalar-variables/identifiers.raku
```

## Kommentare

Lassen Sie uns die Probleme mit den ursprünglichen Namen auflisten:

1. Leerzeichen sind nicht erlaubt: `$ A G E`.
1. Eine Variable benötigt ein Sigil: `Name` (es ist möglich, sigillose Variablen in Raku zu haben, aber sie können trotzdem nicht als `my Name` deklariert werden).
1. Ein Apostroph (eigentlich ein einfaches Anführungszeichen) kann keinen Namen beginnen: `$'Middle'Name`.
1. Eine Ziffer kann auch keinen Namen beginnen: `$2address`.
1. Zwei Bindestriche können nicht zusammenstehen: `$from--to`.

{% include nav.html %}