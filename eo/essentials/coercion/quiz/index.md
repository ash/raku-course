---
title: 'Kvizo: Kio estas ĝia tipo?'
---

{% include menu.html %}

Elektu la ĝustan tipon por ĉiu el la listigitaj literaloj.

{:.quiz-select}
Str | `"Hello, World!"` estas (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` estas (: Int, Rat, Num, Str :)
Int | `12345` estas (: Int, Rat, Num, Str :)
Str | `'12345'` estas (: Int, Rat, Num, Str :)
Rat | `123.45` estas (: Int, Rat, Num, Str :) | Ĉi tio estas racia nombro en Raku, ne flosanta punkto nombro.
Rat | `500.000` estas (: Int, Rat, Num, Str :) | Eĉ se la nombro ne havas faktan decimalan parton, ĝia tipo ne estas `Int`.
Int | `500_000` estas (: Int, Rat, Num, Str :) | `_` estas mil-separilo por pli facila legado de homo.
Str | `'3.14e2'` estas (: Int, Rat, Num, Str :) | Ĉi tio estas citita sekvenco de karakteroj, do ĝi estas ĉeno.
Rat | `3.14` estas (: Int, Rat, Num, Str :)
Num | `3.14e0` estas (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}