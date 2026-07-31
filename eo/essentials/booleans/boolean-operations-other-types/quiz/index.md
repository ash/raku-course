---
title: 'Kvizo: Booleaj operacioj kun ne-Booleaj datumoj'
---

{% include menu.html %}

Kio estas la rezulto de ĉiu linio de kodo en la subaj ekzemploj?

## 1

{:.quiz-select}
True | `True && True` estas (: True, False :)
ĉeno 'True' | `'True' && 'True'` estas (: Boolea True, Boolea False, ĉeno 'True', ĉeno 'False' :) | Ĉi tiuj estas ĉenoj, kiuj en Boolea kunteksto estas `True` valoroj.
ĉeno 'Beta' | `'Alpha' && 'Beta'` estas (: Boolea True, Boolea False, ĉeno 'Alpha', ĉeno 'Beta' :) | La rezulto estas la dua ĉeno.

## 2

{:.quiz-select}
True | `True || True` estas (: True, False :)
ĉeno 'True' | `'True' || 'True'` estas (: Boolea True, Boolea False, ĉeno 'True', ĉeno 'False' :)
ĉeno 'Alpha' | `'Alpha' || 'Beta'` estas (: Boolea True, Boolea False, ĉeno 'Alpha', ĉeno 'Beta' :) | La rezulto estas la unua ĉeno.

## 3

{:.quiz-select}
200 | `100 && 200` estas (: 100, 200, True, False, Nil :)
100 | `100 || 200` estas (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` estas (: 100, 200, True, False, Nil :) | `Nil` estas la valoro por reprezenti la mankon de valoro.

{% include quiz.html %}
{% include nav.html %}