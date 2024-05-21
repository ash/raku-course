---
title: 'Викторина: Что возвращает WHAT?'
---

{% include menu.html %}

Выберите правильный результат вызова метода `WHAT`.

{:.quiz-select}

(Str) | `'String'.WHAT` возвращает (: (Int), (Rat), (Num), (Str) :)
(Int) | `500.WHAT` возвращает (: (Int), (Rat), (Num), (Str) :)
(Rat) | `3.14.WHAT` возвращает (: (Int), (Rat), (Num), (Str) :) | Две точки не должны вас смущать.
(Num) | `pi.WHAT` возвращает (: (Int), (Rat), (Num), (Str) :) | `pi` по определению является `Num`.
(Int) | `(-10).WHAT` возвращает (: (Int), (Rat), (Num), (Str) :)
(Int) | `(+10).WHAT` возвращает (: (Int), (Rat), (Num), (Str) :)
(Rat) | `(-1/2).WHAT` возвращает (: (Int), (Rat), (Num), (Str) :)
(Int) | `('3' + '4').WHAT` возвращает (: (Int), (Rat), (Num), (Str) :) | `'3' + '4'` выполняет числовое сложение, поэтому результат — целое число.
(Str) | `('3' ~ '4').WHAT` возвращает (: (Int), (Rat), (Num), (Str) :) | Конкатенация строк дает строку.

{% include quiz.html %}
{% include nav.html %}