---
title: 'Тест: Какво връща WHAT?'
---

{% include menu.html %}

Изберете правилния резултат от извикването на метода `WHAT`.

{:.quiz-select}

(Str) | `'String'.WHAT` връща (: (Int), (Rat), (Num), (Str) :)
(Int) | `500.WHAT` връща (: (Int), (Rat), (Num), (Str) :)
(Rat) | `3.14.WHAT` връща (: (Int), (Rat), (Num), (Str) :) | Двете точки не трябва да ви объркват.
(Num) | `pi.WHAT` връща (: (Int), (Rat), (Num), (Str) :) | `pi` е `Num` по дефиниция.
(Int) | `(-10).WHAT` връща (: (Int), (Rat), (Num), (Str) :)
(Int) | `(+10).WHAT` връща (: (Int), (Rat), (Num), (Str) :)
(Rat) | `(-1/2).WHAT` връща (: (Int), (Rat), (Num), (Str) :)
(Int) | `('3' + '4').WHAT` връща (: (Int), (Rat), (Num), (Str) :) | `'3' + '4'` прави числово събиране, така че резултатът е цяло число.
(Str) | `('3' ~ '4').WHAT` връща (: (Int), (Rat), (Num), (Str) :) | Конкатенацията на низове дава низ.

{% include quiz.html %}
{% include nav.html %}