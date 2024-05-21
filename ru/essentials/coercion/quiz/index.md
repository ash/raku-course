---
title: 'Викторина: Какой это тип?'
---

{% include menu.html %}

Выберите правильный тип для каждого из перечисленных литералов.

{:.quiz-select}
Str | `"Hello, World!"` это (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` это (: Int, Rat, Num, Str :)
Int | `12345` это (: Int, Rat, Num, Str :)
Str | `'12345'` это (: Int, Rat, Num, Str :)
Rat | `123.45` это (: Int, Rat, Num, Str :) | Это рациональное число в Raku, а не число с плавающей запятой.
Rat | `500.000` это (: Int, Rat, Num, Str :) | Даже если число не имеет фактической дробной части, его тип не `Int`.
Int | `500_000` это (: Int, Rat, Num, Str :) | `_` это разделитель тысяч для удобства чтения человеком.
Str | `'3.14e2'` это (: Int, Rat, Num, Str :) | Это последовательность символов в кавычках, так что это строка.
Rat | `3.14` это (: Int, Rat, Num, Str :)
Num | `3.14e0` это (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}