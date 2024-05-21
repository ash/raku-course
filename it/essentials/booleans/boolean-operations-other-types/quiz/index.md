---
title: 'Quiz: Operazioni Booleane con dati non Booleani'
---

{% include menu.html %}

Qual è il risultato di ogni riga di codice negli esempi seguenti?

## 1

{:.quiz-select}
True | `True && True` è (: True, False :)
stringa &apos;True&apos; | `'True' && 'True'` è (: Boolean True, Boolean False, stringa &apos;True&apos;, stringa &apos;False&apos; :) | Queste sono stringhe, che nel contesto Booleano sono valori `True`.
stringa &apos;Beta&apos; | `'Alpha' && 'Beta'` è (: Boolean True, Boolean False, stringa &apos;Alpha&apos;, stringa &apos;Beta&apos; :) | Il risultato è la seconda stringa.

## 2

{:.quiz-select}
True | `True || True` è (: True, False :)
stringa &apos;True&apos; | `'True' || 'True'` è (: Boolean True, Boolean False, stringa &apos;True&apos;, stringa &apos;False&apos; :)
stringa &apos;Alpha&apos; | `'Alpha' || 'Beta'` è (: Boolean True, Boolean False, stringa &apos;Alpha&apos;, stringa &apos;Beta&apos; :) | Il risultato è la prima stringa.

## 3

{:.quiz-select}
200 | `100 && 200` è (: 100, 200, True, False, Nil :)
100 | `100 || 200` è (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` è (: 100, 200, True, False, Nil :) | `Nil` è il valore che rappresenta l'assenza di valore.

{% include quiz.html %}
{% include nav.html %}