---
title: 'Quiz: ¿Cuál es su tipo?'
---

{% include menu.html %}

Selecciona el tipo correcto para cada uno de los literales listados.

{:.quiz-select}
Str | `"Hello, World!"` es (: Int, Rat, Num, Str :)
Str | `'Hello, World!'` es (: Int, Rat, Num, Str :)
Int | `12345` es (: Int, Rat, Num, Str :)
Str | `'12345'` es (: Int, Rat, Num, Str :)
Rat | `123.45` es (: Int, Rat, Num, Str :) | Este es un número racional en Raku, no un número de punto flotante.
Rat | `500.000` es (: Int, Rat, Num, Str :) | Incluso si el número no tiene una parte decimal real, su tipo no es `Int`.
Int | `500_000` es (: Int, Rat, Num, Str :) | `_` es un separador de miles para facilitar la lectura por parte de un humano.
Str | `'3.14e2'` es (: Int, Rat, Num, Str :) | Esta es una secuencia de caracteres entre comillas, por lo que es una cadena.
Rat | `3.14` es (: Int, Rat, Num, Str :)
Num | `3.14e0` es (: Int, Rat, Num, Str :)

{% include quiz.html %}
{% include nav.html %}