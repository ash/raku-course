---
title: Quiz — Type constraints
---

{% include menu.html %}

Seleziona le assegnazioni consentite in Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` è `Num`, quindi non può essere assegnato direttamente a un `Int`.
0 | my Rat $c = π.Int; | Anche se `π.Int` è `3` ed è di un tipo ‘più stretto’ rispetto a `Rat`, non è possibile assegnarlo.
1 | my Rat $d = π.Str.Rat; | Doppia conversione di tipo, solo per divertimento, non ha un senso particolare, ma è legale.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}