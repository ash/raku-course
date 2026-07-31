---
title: 'Solución: Un booleano con proto'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Bool {
    token TOP { <bool> }

    proto token bool {*}
    token bool:sym<true>  { 'true' }
    token bool:sym<false> { 'false' }
}

say Bool.parse('true').defined;
say Bool.parse('false').defined;
say Bool.parse('unknown').defined;
```

🦋 Puedes encontrar el código fuente en el archivo [proto-bool.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-bool.raku).

## Salida

```
True
True
False
```

## Comentarios

1. El proto token `bool` tiene dos variantes con nombre, `true` y `false`.

1. Cada análisis elige la variante que coincide, así que funcionan tanto `'true'` como `'false'`. Un proto token es la manera ordenada que tiene una gramática de decir «una de estas alternativas con nombre».

1. `'unknown'` no coincide con ninguna variante, así que el proto token no tiene a quién delegar y el análisis falla: `False`. El proto acepta exactamente las alternativas que enumeras, y ninguna más.

{% include nav.html %}
