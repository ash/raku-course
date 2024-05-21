---
title: 'Quiz: Was gibt WHAT zurück?'
---

{% include menu.html %}

Wähle das korrekte Ergebnis des Aufrufs der `WHAT`-Methode.

{:.quiz-select}

(Str) | `'String'.WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :)
(Int) | `500.WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :)
(Rat) | `3.14.WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :) | Zwei Punkte sollten dich nicht verwirren.
(Num) | `pi.WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :) | `pi` ist per Definition `Num`.
(Int) | `(-10).WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :)
(Int) | `(+10).WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :)
(Rat) | `(-1/2).WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :)
(Int) | `('3' + '4').WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :) | `'3' + '4'` führt eine numerische Addition durch, daher ist das Ergebnis ein Integer.
(Str) | `('3' ~ '4').WHAT` gibt zurück (: (Int), (Rat), (Num), (Str) :) | String-Konkatenation ergibt einen String.

{% include quiz.html %}
{% include nav.html %}