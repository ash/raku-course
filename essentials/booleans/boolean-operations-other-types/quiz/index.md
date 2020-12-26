---
title: 'Quiz: Boolean operations with non-Boolean data'
---

{% include menu.html %}

What is the result of each line of code in the below examples?

## 1

{:.quiz-select}
True | `True && True` is (: True, False :)
string &apos;True&apos; | `'True' && 'True'` is a (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :) | These are strings, which in Boolean context are `True` values.
string &apos;Beta&apos; | `'Alpha' && 'Beta'` is a (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | The result is the second string.

## 2

{:.quiz-select}
True | `True || True` is (: True, False :)
string &apos;True&apos; | `'True' || 'True'` is a (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :)
string &apos;Alpha&apos; | `'Alpha' || 'Beta'` is a (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | The result is the first string.

## 3

{:.quiz-select}
200 | `100 && 200` is (: 100, 200, True, False, Nil :)
100 | `100 || 200` is (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` is (: 100, 200, True, False, Nil :) | `Nil` is the value to represent the absense of value.

{% include quiz.html %}
{% include nav.html %}
