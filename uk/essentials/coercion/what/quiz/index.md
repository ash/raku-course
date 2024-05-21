---
title: 'Вікторина: Що повертає WHAT?'
---

{% include menu.html %}

Виберіть правильний результат виклику методу `WHAT`.

{:.quiz-select}

(Str) | `'String'.WHAT` повертає (: (Int), (Rat), (Num), (Str) :)
(Int) | `500.WHAT` повертає (: (Int), (Rat), (Num), (Str) :)
(Rat) | `3.14.WHAT` повертає (: (Int), (Rat), (Num), (Str) :) | Дві крапки не повинні вас збити з пантелику.
(Num) | `pi.WHAT` повертає (: (Int), (Rat), (Num), (Str) :) | `pi` є `Num` за визначенням.
(Int) | `(-10).WHAT` повертає (: (Int), (Rat), (Num), (Str) :)
(Int) | `(+10).WHAT` повертає (: (Int), (Rat), (Num), (Str) :)
(Rat) | `(-1/2).WHAT` повертає (: (Int), (Rat), (Num), (Str) :)
(Int) | `('3' + '4').WHAT` повертає (: (Int), (Rat), (Num), (Str) :) | `'3' + '4'` виконує числове додавання, тому результат є цілим числом.
(Str) | `('3' ~ '4').WHAT` повертає (: (Int), (Rat), (Num), (Str) :) | Конкатенація рядків дає рядок.

{% include quiz.html %}
{% include nav.html %}