---
title: Quiz — Funktionen mit Standardwerten
---

{% include menu.html %}

Es gibt eine Funktion:

```raku
sub add(Int $x, Int $y) returns Int {
    $x + $y
}
```

Überprüfen Sie, welche der folgenden Zuweisungen funktionieren.

{:.quiz}
1 | my $a = add(4, 6); | Die Zuweisung zu einer untypisierten Variablen funktioniert.
0 | my Rat $b = add(5, 6); | Ein `Int`-Wert kann nicht einer `Rat`-typisierten Variablen zugewiesen werden.
1 | my Int $c = add(7, 8);
0 | my Num $d = add(9, 10);
1 | my Str $e = add(9, 10).Str; | Explizite Typkonvertierung hilft.
0 | my Str $f = add(9, 10);

{% include quiz.html %}

{% include nav.html %}