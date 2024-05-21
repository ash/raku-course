---
title: Відповідність діапазону
---

{% include menu.html %}

Нижче наведено кілька прикладів відповідності діапазону. Спробуйте знайти правильні відповіді.

## 1

{:.quiz-select}
True | `10 ~~ 0..20` є&nbsp; (: True, False :)
True | `10 ~~ ^20` є&nbsp; (: True, False :)
True | `0 ~~ ^10` є&nbsp; (: True, False :)
False | `10 ~~ 10^..15` є&nbsp; (: True, False :)
True | `11 ~~ 10..15` є&nbsp; (: True, False :)
True | `14 ~~ 10^..15` є&nbsp; (: True, False :)
False | `15 ~~ 10^..^15` є&nbsp; (: True, False :)

## 2

Трохи складніше. Що, якщо зіставити діапазон з іншим діапазоном?

{:.quiz-select}
True | `2..3 ~~ 1..5 ` є&nbsp; (: True, False :)
False | `1..2 ~~ 5..6 ` є&nbsp; (: True, False :)
False | `1..5 ~~ 3..7 ` є&nbsp; (: True, False :)

{% include quiz.html %}

{% include nav.html %}