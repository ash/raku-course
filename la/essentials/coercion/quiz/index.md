---
title: 'Quiz: Quid est eius genus?'
---

{% include menu.html %}

Elige genus rectum pro singulis literalibus enumeratis.

{:.quiz-select}
Str | `"Hello, World!"` est (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` est (: Int, Rat, Num, Str :)
Int | `12345` est (: Int, Rat, Num, Str :)
Str | `'12345'` est (: Int, Rat, Num, Str :)
Rat | `123.45` est (: Int, Rat, Num, Str :) | Hoc est numerus rationalis in Raku, non numerus fluitans.
Rat | `500.000` est (: Int, Rat, Num, Str :) | Etiam si numerus partem decimalem non habet, genus eius non est `Int`.
Int | `500_000` est (: Int, Rat, Num, Str :) | `_` est separator millium ad faciliorem lectionem ab homine.
Str | `'3.14e2'` est (: Int, Rat, Num, Str :) | Hoc est series characterum citata, ergo est stringa.
Rat | `3.14` est (: Int, Rat, Num, Str :)
Num | `3.14e0` est (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}