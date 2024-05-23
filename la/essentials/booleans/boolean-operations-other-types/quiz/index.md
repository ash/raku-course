---
title: 'Quiz: Boolean operations with non-Boolean data'
---

{% include menu.html %}

Quid est eventus cuiusque lineae codicis in exemplis infra?

## 1

{:.quiz-select}
Verum | `True && True` est (: Verum, Falsum :)
stringa 'Verum' | `'True' && 'True'` est (: Boolean Verum, Boolean Falsum, stringa 'Verum', stringa 'Falsum' :) | Hae sunt stringae, quae in contextu Boolean sunt valores `Verum`.
stringa 'Beta' | `'Alpha' && 'Beta'` est (: Boolean Verum, Boolean Falsum, stringa 'Alpha', stringa 'Beta' :) | Eventus est secunda stringa.

## 2

{:.quiz-select}
Verum | `True || True` est (: Verum, Falsum :)
stringa 'Verum' | `'True' || 'True'` est (: Boolean Verum, Boolean Falsum, stringa 'Verum', stringa 'Falsum' :)
stringa 'Alpha' | `'Alpha' || 'Beta'` est (: Boolean Verum, Boolean Falsum, stringa 'Alpha', stringa 'Beta' :) | Eventus est prima stringa.

## 3

{:.quiz-select}
200 | `100 && 200` est (: 100, 200, Verum, Falsum, Nil :)
100 | `100 || 200` est (: 100, 200, Verum, Falsum, Nil :)
Nil | `100 ^^ 200` est (: 100, 200, Verum, Falsum, Nil :) | `Nil` est valor ad absentiam valoris repraesentandam.

{% include quiz.html %}
{% include nav.html %}