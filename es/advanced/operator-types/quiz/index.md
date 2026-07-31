---
title: Quiz — Categorías de operadores
translations_gpt:
---

{% include menu.html %}

En la expresión `@a[0]`, a que categoría pertenece el subíndice `[0]`?

{:.quiz}
0 | postfix
1 | postcircumfix
0 | circumfix
0 | infix

{% include quiz.html %}

<div class="extended-explanation">

Un subíndice rodea su contenido con corchetes *y* sigue a un termino (en este caso `@a`), lo que lo convierte en un operador postcircumfijo. Un postfijo simple (como `++`) no utiliza corchetes, y un circumfijo (como el constructor de arreglos `[1, 2, 3]`) rodea pero no sigue a un termino.

</div>

{% include nav.html %}
