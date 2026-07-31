---
title: Convirtiendo valores en texto
---

{% include menu.html %}

Siempre que un programa muestra un valor — cuando usas `say`, lo imprimes o lo insertas en una cadena — ese valor debe convertirse en texto. Raku no tiene una única forma fija de hacerlo. En su lugar, cada valor lleva consigo algunos métodos estándar, cada uno de los cuales produce una cadena con un propósito diferente:

* `.gist` — una forma legible para humanos, la que imprime `say`.
* `.Str` — la forma de cadena simple, usada en contexto de cadena.
* `.raku` — una forma similar a código, útil para depuración.

Los tres son métodos ordinarios definidos para cada valor en el lenguaje, así que funcionan de la misma manera con un número, una cadena, un arreglo o un objeto propio. Las páginas siguientes examinan cada método por turno y luego te ayudan a elegir el correcto; [la sección siguiente presenta `dd`](/es/advanced/dd), una herramienta de Rakudo construida sobre `.raku`.

{% include nav.html %}
