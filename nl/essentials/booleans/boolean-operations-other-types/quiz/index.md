---
title: 'Quiz: Booleaanse operaties met niet-Booleaanse gegevens'
---

{% include menu.html %}

Wat is het resultaat van elke regel code in de onderstaande voorbeelden?

## 1

{:.quiz-select}
True | `True && True` is (: True, False :)
string &apos;True&apos; | `'True' && 'True'` is een (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :) | Dit zijn strings, die in Booleaanse context `True` waarden zijn.
string &apos;Beta&apos; | `'Alpha' && 'Beta'` is een (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Het resultaat is de tweede string.

## 2

{:.quiz-select}
True | `True || True` is (: True, False :)
string &apos;True&apos; | `'True' || 'True'` is een (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :)
string &apos;Alpha&apos; | `'Alpha' || 'Beta'` is een (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Het resultaat is de eerste string.

## 3

{:.quiz-select}
200 | `100 && 200` is (: 100, 200, True, False, Nil :)
100 | `100 || 200` is (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` is (: 100, 200, True, False, Nil :) | `Nil` is de waarde om de afwezigheid van waarde aan te geven.

{% include quiz.html %}
{% include nav.html %}