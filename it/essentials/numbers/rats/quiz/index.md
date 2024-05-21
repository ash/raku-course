---
title: 'Quiz: Numeri razionali'
---

{% include menu.html %}

Seleziona i numeri che sono `Rat` in Raku.

<!--0 | ↉ | Questo è un numero `Int`, e il suo valore è `0`.-->

{:.quiz}
1 | 3/64 | Questo è un numero `Rat`, non una divisione di due interi.
1 | ⅞
1 | 2.718281828459045 | Questo è un valore approssimativo della costante di Eulero, ma è comunque un `Rat`, poiché non è infinitamente lungo.
1 | 10_230/50_245 | Puoi usare anche qui il separatore `_`.
1 | 10.345_678 | E anche qui.
0 | 10.345,678 | Una virgola qui non è né una virgola decimale né un separatore.
1 | <33/44> | Un'altra forma di scrivere numeri razionali in Raku.
0 | <33 44> | Questa è una lista di stringhe (la vedremo più avanti nel corso).
0 | &apos;<33 44>&apos; | Questa è una stringa.
1 | ⅞/⅚ | Questa è una divisione di due numeri `Rat`, ma il risultato è anche un numero `Rat`.

{% include quiz.html %}

{% include nav.html %}