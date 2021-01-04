---
title: Matching against a range
---

{% include menu.html %}

Below are a number of matches agains the range. Try to find out the correct answers.

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

A bit trickier. What if to match a range against another range?

{:.quiz-select}
True | `2..3 ~~ 1..5 ` is&nbsp; (: True, False :)
False | `1..2 ~~ 5..6 ` is&nbsp; (: True, False :)

{% include quiz.html %}

{% include nav.html %}
