---
title: 'Quiz: ¿Qué devuelve WHAT?'
---

{% include menu.html %}

Selecciona el resultado correcto de llamar al método `WHAT`.

{:.quiz-select}

(Str) | `'String'.WHAT` devuelve (: (Int), (Rat), (Num), (Str) :)
(Int) | `500.WHAT` devuelve (: (Int), (Rat), (Num), (Str) :)
(Rat) | `3.14.WHAT` devuelve (: (Int), (Rat), (Num), (Str) :) | Dos puntos no deberían confundirte.
(Num) | `pi.WHAT` devuelve (: (Int), (Rat), (Num), (Str) :) | `pi` es `Num` por definición.
(Int) | `(-10).WHAT` devuelve (: (Int), (Rat), (Num), (Str) :)
(Int) | `(+10).WHAT` devuelve (: (Int), (Rat), (Num), (Str) :)
(Rat) | `(-1/2).WHAT` devuelve (: (Int), (Rat), (Num), (Str) :)
(Int) | `('3' + '4').WHAT` devuelve (: (Int), (Rat), (Num), (Str) :) | `'3' + '4'` realiza una suma numérica, por lo que el resultado es entero.
(Str) | `('3' ~ '4').WHAT` devuelve (: (Int), (Rat), (Num), (Str) :) | La concatenación de cadenas da una cadena.

{% include quiz.html %}
{% include nav.html %}