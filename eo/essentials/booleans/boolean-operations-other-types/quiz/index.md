---
title: 'Kvizo: Booleaj operacioj kun ne-Booleaj datumoj'
---

{% include menu.html %}

Kio estas la rezulto de ĉiu linio de kodo en la subaj ekzemploj?

## 1

{:.quiz-select}
True | `True && True` estas (: True, False :)
stringo 'True' | `'True' && 'True'` estas (: Boolea True, Boolea False, stringo 'True', stringo 'False' :) | Ĉi tiuj estas stringoj, kiuj en Boolea kunteksto estas `True` valoroj.
stringo 'Beta' | `'Alpha' && 'Beta'` estas (: Boolea True, Boolea False, stringo 'Alpha', stringo 'Beta' :) | La rezulto estas la dua stringo.

## 2

{:.quiz-select}
True | `True || True` estas (: True, False :)
stringo 'True' | `'True' || 'True'` estas (: Boolea True, Boolea False, stringo 'True', stringo 'False' :)
stringo 'Alpha' | `'Alpha' || 'Beta'` estas (: Boolea True, Boolea False, stringo 'Alpha', stringo 'Beta' :) | La rezulto estas la unua stringo.

## 3

{:.quiz-select}
200 | `100 && 200` estas (: 100, 200, True, False, Nil :)
100 | `100 || 200` estas (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` estas (: 100, 200, True, False, Nil :) | `Nil` estas la valoro por reprezenti la mankon de valoro.

{% include quiz.html %}
{% include nav.html %}