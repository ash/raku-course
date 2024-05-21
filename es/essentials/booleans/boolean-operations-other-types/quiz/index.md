---
title: 'Cuestionario: Operaciones booleanas con datos no booleanos'
---

{% include menu.html %}

¿Cuál es el resultado de cada línea de código en los siguientes ejemplos?

## 1

{:.quiz-select}
True | `True && True` es (: True, False :)
cadena &apos;True&apos; | `'True' && 'True'` es (: Boolean True, Boolean False, cadena &apos;True&apos;, cadena &apos;False&apos; :) | Estas son cadenas, que en contexto booleano son valores `True`.
cadena &apos;Beta&apos; | `'Alpha' && 'Beta'` es (: Boolean True, Boolean False, cadena &apos;Alpha&apos;, cadena &apos;Beta&apos; :) | El resultado es la segunda cadena.

## 2

{:.quiz-select}
True | `True || True` es (: True, False :)
cadena &apos;True&apos; | `'True' || 'True'` es (: Boolean True, Boolean False, cadena &apos;True&apos;, cadena &apos;False&apos; :)
cadena &apos;Alpha&apos; | `'Alpha' || 'Beta'` es (: Boolean True, Boolean False, cadena &apos;Alpha&apos;, cadena &apos;Beta&apos; :) | El resultado es la primera cadena.

## 3

{:.quiz-select}
200 | `100 && 200` es (: 100, 200, True, False, Nil :)
100 | `100 || 200` es (: 100, 200, True, False, Nil :)
Nil | `100 ^^ 200` es (: 100, 200, True, False, Nil :) | `Nil` es el valor que representa la ausencia de valor.

{% include quiz.html %}
{% include nav.html %}