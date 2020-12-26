---
title: 'Quiz: What is its type?'
---

{% include menu.html %}

Select the correct type for each of the listed literals.

{:.quiz-select}
Str | `"Hello, World!"` is (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` is (: Int, Rat, Num, Str :)
Int | `12345` is (: Int, Rat, Num, Str :)
Str | `'12345'` is (: Int, Rat, Num, Str :)
Rat | `123.45` is (: Int, Rat, Num, Str :) | This is rational number in Raku, not a floating-point number.
Rat | `500.000` is (: Int, Rat, Num, Str :) | Even if the number has no decimal part, it's type is not `Int`.
Int | `500_000` is (: Int, Rat, Num, Str :) | `_` is a thousands separator for easier reading by a human.
Str | `'3.14e2'` is (: Int, Rat, Num, Str :) | This is a quoted sequence of characters, so it is a string.
Rat | `3.14` is (: Int, Rat, Num, Str :)
Num | `3.14e0` is (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}
