---
title: Quiz 2 — Multifunktionen mit typisierten Parametern
---

{% include menu.html %}

Hier sind die drei Varianten der Funktion.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Welche Aufrufe sind gültig?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | Es gibt kein `multi sub func(Str $a)`.
1 | func(4.4)

Was geben die Aufrufe zurück?

{:.quiz-select}
1 | `func(4)` gibt&nbsp; (: 1, 2, 3 :) zurück
2 | `func(4.4)` gibt&nbsp; (: 1, 2, 3 :) zurück | `4.4` ist ein `Rat`.
2 | `func(4/4)` gibt&nbsp; (: 1, 2, 3 :) zurück | `4/4` ist ebenfalls eine `Rat`-Zahl.
3 | `func(4e4)` gibt&nbsp; (: 1, 2, 3 :) zurück | Eine Zahl in wissenschaftlicher Notation ist `Num`.

{% include quiz.html %}

{% include nav.html %}