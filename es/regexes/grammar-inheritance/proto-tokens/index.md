---
title: Tokens proto y alternativas
translations_gpt:
---

{% include menu.html %}

A veces un concepto tiene varias formas: un número puede ser un entero o un decimal. Podrías escribir una alternativa con `|`, pero las gramáticas ofrecen una manera más ordenada: un _proto token_ con variantes con nombre.

Declara el token paraguas como `proto token` y después escribe cada variante como `token nombre:sym<etiqueta>`:

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<int>   { \d+ }
    token number:sym<float> { \d+ '.' \d+ }
}

say Number.parse('42').defined;   # True
say Number.parse('3.14').defined; # True
```

La línea `proto token number {*}` dice «un `number` es una de las variantes de abajo». Cada variante lleva una etiqueta `:sym<…>` que la nombra. Cuando la gramática necesita un `<number>`, prueba las variantes y, por emparejamiento del token más largo, elige la que encaja: `int` para `42`, `float` para `3.14`.

Los proto tokens se leen mejor que una larga cadena de alternativas con `|`, y las etiquetas `:sym<…>` dan a cada caso un nombre sobre el que podrás actuar más adelante, cuando adjuntes significado al análisis. Son la manera idiomática de expresar «una de estas clases» en una gramática.

{% include nav.html %}
