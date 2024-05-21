---
title: 'Вікторина: Який це тип?'
---

{% include menu.html %}

Виберіть правильний тип для кожного з наведених літералів.

{:.quiz-select}
Str | `"Hello, World!"` є (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` є (: Int, Rat, Num, Str :)
Int | `12345` є (: Int, Rat, Num, Str :)
Str | `'12345'` є (: Int, Rat, Num, Str :)
Rat | `123.45` є (: Int, Rat, Num, Str :) | Це раціональне число в Raku, а не число з плаваючою комою.
Rat | `500.000` є (: Int, Rat, Num, Str :) | Навіть якщо число не має фактичної десяткової частини, його тип не є `Int`.
Int | `500_000` є (: Int, Rat, Num, Str :) | `_` є роздільником тисяч для зручності читання людиною.
Str | `'3.14e2'` є (: Int, Rat, Num, Str :) | Це цитована послідовність символів, тому це рядок.
Rat | `3.14` є (: Int, Rat, Num, Str :)
Num | `3.14e0` є (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}