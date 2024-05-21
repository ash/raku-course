---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Hier zijn de drie varianten van de functie.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Welke aanroepen zijn geldig?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | Er is geen `multi sub func(Str $a`).
1 | func(4.4)

Wat geven de aanroepen terug?

{:.quiz-select}
1 | `func(4)` geeft&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` geeft&nbsp; (: 1, 2, 3 :) | `4.4` is een `Rat`.
2 | `func(4/4)` geeft&nbsp; (: 1, 2, 3 :) | `4/4` is ook een `Rat` nummer.
3 | `func(4e4)` geeft&nbsp; (: 1, 2, 3 :) | Een getal in wetenschappelijke notatie is `Num`.

{% include quiz.html %}

{% include nav.html %}