---
title: 'Тест: Логические операции с небулевыми данными'
---

{% include menu.html %}

Какой результат у каждой строчки кода в примерах ниже?

## 1

{:.quiz-select}
True | `True && True` is (: True, False :)
string &apos;True&apos; | `'True' && 'True'` is a (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :) | Это строки, которые в булевом контексте имеют значение `True`.
string &apos;Beta&apos; | `'Alpha' && 'Beta'` is a (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Результат — вторая строка.

## 2

{:.quiz-select}
True | `True || True` is (: True, False :)
string &apos;True&apos; | `'True' || 'True'` is a (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :)
string &apos;Alpha&apos; | `'Alpha' || 'Beta'` is a (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Результат — первая строка.

## 3

{:.quiz-select}
200 | `100 && 200` is (: 100, 200, True, False, Nil :)
100 | `100 || 200` is (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` is (: 100, 200, True, False, Nil :) | `Nil` — это значение, которое обозначает отсутствие значения.

{% include quiz.html %}
{% assign human=1 %}
{% include nav.html %}
