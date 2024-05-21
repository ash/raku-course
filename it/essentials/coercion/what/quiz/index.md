---
title: 'Quiz: What does WHAT return?'
---

{% include menu.html %}

Seleziona il risultato corretto della chiamata al metodo `WHAT`.

{:.quiz-select}

(Str) | `'String'.WHAT` restituisce (: (Int), (Rat), (Num), (Str) :)
(Int) | `500.WHAT` restituisce (: (Int), (Rat), (Num), (Str) :)
(Rat) | `3.14.WHAT` restituisce (: (Int), (Rat), (Num), (Str) :) | Due punti non dovrebbero confonderti.
(Num) | `pi.WHAT` restituisce (: (Int), (Rat), (Num), (Str) :) | `pi` è `Num` per definizione.
(Int) | `(-10).WHAT` restituisce (: (Int), (Rat), (Num), (Str) :)
(Int) | `(+10).WHAT` restituisce (: (Int), (Rat), (Num), (Str) :)
(Rat) | `(-1/2).WHAT` restituisce (: (Int), (Rat), (Num), (Str) :)
(Int) | `('3' + '4').WHAT` restituisce (: (Int), (Rat), (Num), (Str) :) | `'3' + '4'` fa un'addizione numerica, quindi il risultato è un intero.
(Str) | `('3' ~ '4').WHAT` restituisce (: (Int), (Rat), (Num), (Str) :) | La concatenazione di stringhe dà una stringa.

{% include quiz.html %}
{% include nav.html %}