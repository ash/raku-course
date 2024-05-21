---
title: 'Тест: Сопоставление с интервалом'
---

{% include menu.html %}

Ниже приведен ряд сопоставлений с интервалом. Попробуйте найти правильные
ответы.

## 1

{:.quiz-select}
True | `10 ~~ 0..20` is&nbsp; (: True, False :)
True | `10 ~~ ^20` is&nbsp; (: True, False :)
True | `0 ~~ ^10` is&nbsp; (: True, False :)
False | `10 ~~ 10^..15` is&nbsp; (: True, False :)
True | `11 ~~ 10..15` is&nbsp; (: True, False :)
True | `14 ~~ 10^..15` is&nbsp; (: True, False :)
False | `15 ~~ 10^..^15` is&nbsp; (: True, False :)

## 2

Немного сложнее, что если сопоставить интервал с другим интервалом?

{:.quiz-select}
True | `2..3 ~~ 1..5 ` is&nbsp; (: True, False :)
False | `1..2 ~~ 5..6 ` is&nbsp; (: True, False :)
False | `1..5 ~~ 3..7 ` is&nbsp; (: True, False :)

{% include quiz.html %}

{% assign human=1 %}
{% include nav.html %}
