---
title: 'Quiz: Wat retourneert WHAT?'
---

{% include menu.html %}

Selecteer het juiste resultaat van het aanroepen van de `WHAT` methode.

{:.quiz-select}

(Str) | `'String'.WHAT` retourneert (: (Int), (Rat), (Num), (Str) :)
(Int) | `500.WHAT` retourneert (: (Int), (Rat), (Num), (Str) :)
(Rat) | `3.14.WHAT` retourneert (: (Int), (Rat), (Num), (Str) :) | Twee punten moeten je niet verwarren.
(Num) | `pi.WHAT` retourneert (: (Int), (Rat), (Num), (Str) :) | `pi` is per definitie `Num`.
(Int) | `(-10).WHAT` retourneert (: (Int), (Rat), (Num), (Str) :)
(Int) | `(+10).WHAT` retourneert (: (Int), (Rat), (Num), (Str) :)
(Rat) | `(-1/2).WHAT` retourneert (: (Int), (Rat), (Num), (Str) :)
(Int) | `('3' + '4').WHAT` retourneert (: (Int), (Rat), (Num), (Str) :) | `'3' + '4'` doet numerieke optelling, dus het resultaat is een integer.
(Str) | `('3' ~ '4').WHAT` retourneert (: (Int), (Rat), (Num), (Str) :) | String concatenatie geeft een string.

{% include quiz.html %}
{% include nav.html %}