---
title: 'Solución: Una gramática, dos clases de acción'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Pair {
    token TOP { <a> ',' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class Sum  { method TOP($/) { make $<a>.Int + $<b>.Int } }
class Diff { method TOP($/) { make $<a>.Int - $<b>.Int } }

say Pair.parse('10,20', actions => Sum.new).made;
say Pair.parse('10,20', actions => Diff.new).made;
```

🦋 Puedes encontrar el código fuente en el archivo [two-actions.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/two-actions.raku).

## Salida

```
30
-10
```

## Comentarios

1. La gramática solo describe la forma `número,número`; no sabe nada de qué hay que calcular.

1. Las dos clases de acciones adjuntan significados distintos al mismo análisis: una suma los números y la otra los resta. Pasar a `.parse` un objeto `actions` distinto es todo lo que hace falta para obtener un resultado distinto, sin cambiar la gramática en absoluto.

{% include nav.html %}
