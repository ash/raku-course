---
title: Quiz — Typbeschränkungen
---

{% include menu.html %}

Wählen Sie die erlaubten Zuweisungen in Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` ist `Num`, daher kann es nicht direkt einem `Int` zugewiesen werden.
0 | my Rat $c = π.Int; | Auch wenn `π.Int` `3` ist und von einem „engeren“ Typ als `Rat`, ist die Zuweisung nicht möglich.
1 | my Rat $d = π.Str.Rat; | Doppelte Typkonvertierung, nur zum Spaß, es gibt keinen besonderen Sinn darin, aber es ist legal.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}