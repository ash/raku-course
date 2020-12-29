---
title: 'Quiz: What does WHAT return?'
---

{% include menu.html %}

Select the correct result of calling the `WHAT` method.

{:.quiz-select}

Str | `'String'.WHAT` returns (: Int, Rat, Num, Str :)
Int | `500.WHAT` returns (: Int, Rat, Num, Str :)
Rat | `3.14.WHAT` returns (: Int, Rat, Num, Str :) | Two dots should not confuse you.
Num | `pi.WHAT` returns (: Int, Rat, Num, Str :) | `pi` is `Num` by definition.
Int | `(-10).WHAT` returns (: Int, Rat, Num, Str :)
Int | `(+10).WHAT` returns (: Int, Rat, Num, Str :)
Rat | `(-1/2).WHAT` returns (: Int, Rat, Num, Str :)
Int | `('3' + '4').WHAT` returns (: Int, Rat, Num, Str :) | `'3' + '4'` uses a numeric addition, so the result is integer.
Str | `('3' ~ '4').WHAT` returns (: Int, Rat, Num, Str :) | String concatenation gives a string.

{% include quiz.html %}
{% include nav.html %}
