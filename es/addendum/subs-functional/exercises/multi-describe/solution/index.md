---
title: 'Solución: Describir según el tipo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
multi describe(Int $x) { "integer $x" }
multi describe(Str $x) { "string $x" }
multi describe(@x)     { "list of {@x.elems}" }

say describe(42);
say describe('hi');
say describe([1, 2, 3]);
```

🦋 Puedes encontrar el código fuente en el archivo [multi-describe.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/multi-describe.raku).

## Salida

```
integer 42
string hi
list of 3
```

## Comentarios

1. Cada `multi` da una versión de `describe` con un tipo de parámetro distinto. Raku
elige el candidato que coincide según el tipo del argumento.

1. La firma `@x` coincide con una lista, así que el array despacha al tercer candidato,
que informa de su longitud.

{% include nav.html %}
