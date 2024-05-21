---
title: Rückgabetyp von Funktionen
---

{% include menu.html %}

Das Ergebnis der Funktion kann auch explizit typisiert werden. Es gibt einige Möglichkeiten, dies im Code auszudrücken.

```raku
sub add(Int $x, Int $y) returns Int { $x + $y }

my Int sub add(Int $x, Int $y) { $x + $y }

sub add(Int $x, Int $y) of Int { $x + $y }

sub add(Int $x, Int $y --> Int) { $x + $y }
```

Wählen Sie eine, die Ihnen am besten gefällt. Beachten Sie, dass im vierten Beispiel der Rückgabetyp innerhalb der Klammern mit den Funktionsparametern geschrieben wird.

{% include nav.html %}