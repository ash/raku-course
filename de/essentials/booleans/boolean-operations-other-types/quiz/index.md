---
title: 'Quiz: Boolesche Operationen mit nicht-booleschen Daten'
---

{% include menu.html %}

Was ist das Ergebnis jeder Zeile des Codes in den folgenden Beispielen?

## 1

{:.quiz-select}
True | `True && True` ist (: True, False :)
string &apos;True&apos; | `'True' && 'True'` ist ein (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :) | Dies sind Zeichenketten, die im booleschen Kontext `True`-Werte sind.
string &apos;Beta&apos; | `'Alpha' && 'Beta'` ist ein (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Das Ergebnis ist die zweite Zeichenkette.

## 2

{:.quiz-select}
True | `True || True` ist (: True, False :)
string &apos;True&apos; | `'True' || 'True'` ist ein (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :)
string &apos;Alpha&apos; | `'Alpha' || 'Beta'` ist ein (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Das Ergebnis ist die erste Zeichenkette.

## 3

{:.quiz-select}
200 | `100 && 200` ist (: 100, 200, True, False, Nil :)
100 | `100 || 200` ist (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` ist (: 100, 200, True, False, Nil :) | `Nil` ist der Wert, der das Fehlen eines Wertes darstellt.

{% include quiz.html %}
{% include nav.html %}