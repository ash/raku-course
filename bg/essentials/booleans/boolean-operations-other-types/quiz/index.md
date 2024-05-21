---
title: 'Тест: Булеви операции с не-булеви данни'
---

{% include menu.html %}

Какъв е резултатът от всеки ред код в долните примери?

## 1

{:.quiz-select}
True | `True && True` е (: True, False :)
string &apos;True&apos; | `'True' && 'True'` е (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :) | Това са низове, които в булев контекст са стойности `True`.
string &apos;Beta&apos; | `'Alpha' && 'Beta'` е (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Резултатът е вторият низ.

## 2

{:.quiz-select}
True | `True || True` е (: True, False :)
string &apos;True&apos; | `'True' || 'True'` е (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :)
string &apos;Alpha&apos; | `'Alpha' || 'Beta'` е (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Резултатът е първият низ.

## 3

{:.quiz-select}
200 | `100 && 200` е (: 100, 200, True, False, Nil :)
100 | `100 || 200` е (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` е (: 100, 200, True, False, Nil :) | `Nil` е стойността, която представлява отсъствието на стойност.

{% include quiz.html %}
{% include nav.html %}