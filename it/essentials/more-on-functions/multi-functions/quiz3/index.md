---
title: Quiz 2 — Multi-functions with typed parameters
---

{% include menu.html %}

Ecco le tre varianti della funzione.

```raku
multi sub func(Int $a) { 1 }
multi sub func(Rat $a) { 2 }
multi sub func(Num $a) { 3 }
```

Quali chiamate sono valide?

{:.quiz}
1 | func(4)
1 | func(4e4)
1 | func(4/4)
0 | func(&apos;4&apos;) | Non esiste `multi sub func(Str $a`).
1 | func(4.4)

Cosa restituiscono le chiamate?

{:.quiz-select}
1 | `func(4)` restituisce&nbsp; (: 1, 2, 3 :)
2 | `func(4.4)` restituisce&nbsp; (: 1, 2, 3 :) | `4.4` è un `Rat`.
2 | `func(4/4)` restituisce&nbsp; (: 1, 2, 3 :) | `4/4` è anche un numero `Rat`.
3 | `func(4e4)` restituisce&nbsp; (: 1, 2, 3 :) | Un numero in notazione scientifica è `Num`.

{% include quiz.html %}

{% include nav.html %}