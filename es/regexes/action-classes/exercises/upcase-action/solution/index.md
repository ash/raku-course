---
title: 'Solución: Una acción en mayúsculas'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar WordG {
    token TOP  { <word> }
    token word { \w+ }
}

class UpcaseAction {
    method TOP($/) { make $<word>.Str.uc }
}

say WordG.parse('hello', actions => UpcaseAction.new).made;
```

🦋 Puedes encontrar el código fuente en el archivo [upcase-action.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/action-classes/upcase-action.raku).

## Salida

```
HELLO
```

## Comentarios

1. La gramática captura la palabra; la clase de acciones decide qué hacer con ella.

1. `$<word>.Str` da el texto coincidente y `.uc` lo pasa a mayúsculas, y eso es lo que `make` guarda en la coincidencia.

{% include nav.html %}
