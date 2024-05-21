---
title: 'Quiz: Wat is het type?'
---

{% include menu.html %}

Selecteer het juiste type voor elk van de genoemde letterlijke waarden.

{:.quiz-select}
Str | `"Hello, World!"` is (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` is (: Int, Rat, Num, Str :)
Int | `12345` is (: Int, Rat, Num, Str :)
Str | `'12345'` is (: Int, Rat, Num, Str :)
Rat | `123.45` is (: Int, Rat, Num, Str :) | Dit is een rationeel getal in Raku, geen drijvend-komma getal.
Rat | `500.000` is (: Int, Rat, Num, Str :) | Zelfs als het getal geen daadwerkelijke decimale delen heeft, is het type niet `Int`.
Int | `500_000` is (: Int, Rat, Num, Str :) | `_` is een scheidingsteken voor duizendtallen voor gemakkelijker lezen door een mens.
Str | `'3.14e2'` is (: Int, Rat, Num, Str :) | Dit is een geciteerde reeks tekens, dus het is een string.
Rat | `3.14` is (: Int, Rat, Num, Str :)
Num | `3.14e0` is (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}