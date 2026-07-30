---
title: 'Solution: Zwei Prüfungen planen'
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
use Test;

plan 2;

my @sorted = (3, 1, 2).sort;
is-deeply @sorted, [1, 2, 3], 'sorted';

is 10 % 3, 1, 'remainder';
```

🦋 Du findest den Quellcode in der Datei [test-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/test-a-list.raku).

## Ausgabe

```
1..2
ok 1 - sorted
ok 2 - remainder
```

## Kommentare

1. `plan 2` gibt die Anzahl an, bevor irgendein Test ausgeführt wird, sodass die Zeile `1..2` zuerst erscheint. Wenn die Datei dann eine andere Anzahl von Prüfungen ausführen würde, würde die Suite als fehlgeschlagen gemeldet — ein Schutz, den `done-testing` dir nicht bieten kann.

1. `is-deeply` vergleicht die beiden Listen auf exakte, typbewusste Gleichheit. Das Sortieren von `3, 1, 2` ergibt `1, 2, 3`, was übereinstimmt.

1. `is` vergleicht zwei Werte auf einfache Gleichheit und gibt bei einem Fehlschlag beide aus. Hier ist `10 % 3` gleich `1`, was dem erwarteten Wert entspricht, sodass auch der zweite Test bestanden wird.

{% include nav.html %}
