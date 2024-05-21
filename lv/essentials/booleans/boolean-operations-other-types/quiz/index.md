---
title: 'Viktorīna: Būla operācijas ar nebūla datiem'
---

{% include menu.html %}

Kāds ir katras koda rindas rezultāts zemāk esošajos piemēros?

## 1

{:.quiz-select}
True | `True && True` ir (: True, False :)
string &apos;True&apos; | `'True' && 'True'` ir (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :) | Tās ir virknes, kas Būla kontekstā ir `True` vērtības.
string &apos;Beta&apos; | `'Alpha' && 'Beta'` ir (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Rezultāts ir otrā virkne.

## 2

{:.quiz-select}
True | `True || True` ir (: True, False :)
string &apos;True&apos; | `'True' || 'True'` ir (: Boolean True, Boolean False, string &apos;True&apos;, string &apos;False&apos; :)
string &apos;Alpha&apos; | `'Alpha' || 'Beta'` ir (: Boolean True, Boolean False, string &apos;Alpha&apos;, string &apos;Beta&apos; :) | Rezultāts ir pirmā virkne.

## 3

{:.quiz-select}
200 | `100 && 200` ir (: 100, 200, True, False, Nil :)
100 | `100 || 200` ir (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` ir (: 100, 200, True, False, Nil :) | `Nil` ir vērtība, kas pārstāv vērtības neesamību.

{% include quiz.html %}
{% include nav.html %}