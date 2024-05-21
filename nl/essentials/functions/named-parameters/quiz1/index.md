---
title: Quiz — Genaamde parameters
---

{% include menu.html %}

Beschouw een functie:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

## 1

Wat zijn de geldige manieren om deze aan te roepen?

{:.quiz}
0 | f(1, 2) | Positionele argumenten doorgegeven, niet genaamd.
1 | f(a => 1, b => 2)
0 | f(a = 1, b = 2) | Toewijzingsoperator in plaats van een paarconstructor.
1 | f(b => 2, a => 1)

## 2

Wat geven de volgende aanroepen terug voor dezelfde functie?

{:.quiz-select}
−1 | `f(a => 1, b => 2)` retourneert&nbsp; (: 1, −1 :)
−1 | `f(b => 2, a => 1)` retourneert&nbsp; (: 1, −1 :) | De volgorde van genaamde argumenten maakt niet uit.
1 | `f(a => 2, b => 1)` retourneert&nbsp; (: 1, −1 :)


{% include quiz.html %}

{% include nav.html %}