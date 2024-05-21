---
title: Quiz — Benannte Parameter
---

{% include menu.html %}

Betrachten Sie eine Funktion:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

## 1

Was sind die gültigen Möglichkeiten, sie aufzurufen?

{:.quiz}
0 | f(1, 2) | Positionsargumente übergeben, nicht benannt.
1 | f(a => 1, b => 2)
0 | f(a = 1, b = 2) | Zuweisungsoperator anstelle eines Paar-Konstruktors.
1 | f(b => 2, a => 1)

## 2

Für die gleiche Funktion, was geben die folgenden Aufrufe zurück?

{:.quiz-select}
−1 | `f(a => 1, b => 2)` gibt&nbsp; (: 1, −1 :) zurück
−1 | `f(b => 2, a => 1)` gibt&nbsp; (: 1, −1 :) zurück | Die Reihenfolge der benannten Argumente spielt keine Rolle.
1 | `f(a => 2, b => 1)` gibt&nbsp; (: 1, −1 :) zurück


{% include quiz.html %}

{% include nav.html %}