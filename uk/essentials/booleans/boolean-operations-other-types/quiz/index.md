---
title: 'Тест: Булеві операції з небулевими даними'
---

{% include menu.html %}

Який результат кожного рядка коду в наведених нижче прикладах?

## 1

{:.quiz-select}
True | `True && True` є (: True, False :)
рядок 'True' | `'True' && 'True'` є (: Булеве True, Булеве False, рядок 'True', рядок 'False' :) | Це рядки, які в булевому контексті є значеннями `True`.
рядок 'Beta' | `'Alpha' && 'Beta'` є (: Булеве True, Булеве False, рядок 'Alpha', рядок 'Beta' :) | Результат - другий рядок.

## 2

{:.quiz-select}
True | `True || True` є (: True, False :)
рядок 'True' | `'True' || 'True'` є (: Булеве True, Булеве False, рядок 'True', рядок 'False' :)
рядок 'Alpha' | `'Alpha' || 'Beta'` є (: Булеве True, Булеве False, рядок 'Alpha', рядок 'Beta' :) | Результат - перший рядок.

## 3

{:.quiz-select}
200 | `100 && 200` є (: 100, 200, True, False, Nil :)
100 | `100 || 200` є (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` є (: 100, 200, True, False, Nil :) | `Nil` - це значення, яке представляє відсутність значення.

{% include quiz.html %}
{% include nav.html %}