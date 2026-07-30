---
title: 'Solution: Ein Heredoc'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Du findest den Quellcode in der Datei [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Ausgabe

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Kommentare

1. Das Heredoc beginnt mit `qq:to` statt `q:to`, ist also interpolierend. Wie ein `qq`-String füllt es Skalare ein — `$name`, `$count`, `$item` — *und* führt eingebetteten Code aus: Der Block `{$count * $price}` berechnet `3 * 25`, sodass die Gesamtsumme `75` inline erscheint.

1. Die doppelten Anführungszeichen um `"$item"` sind hier einfach wörtliche Zeichen; innerhalb eines Heredocs gibt es kein Trennzeichen zum Escapen, sodass sie wie geschrieben ausgegeben werden, während `$item` trotzdem interpoliert wird.

1. Der Rumpf und das schließende `END` sind um die gleichen vier Leerzeichen eingerückt. Die Einrückung des Abschlusswortes wird von jeder Zeile entfernt, sodass diese vier Leerzeichen nie im String landen — die Ausgabe beginnt am linken Rand.

1. Das Heredoc endet bereits mit einem Zeilenumbruch, daher wird `print` statt `say` verwendet, um eine zusätzliche Leerzeile zu vermeiden.

{% include nav.html %}
