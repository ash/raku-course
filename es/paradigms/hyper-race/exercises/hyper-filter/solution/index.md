---
title: 'Solución: hyper con un filtro'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (1..20).hyper.grep(* > 10).map(*²);
```

🦋 Puedes encontrar el código fuente en el archivo [hyper-filter.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/hyper-race/hyper-filter.raku).

## Salida

```
(121 144 169 196 225 256 289 324 361 400)
```

## Comentarios

1. `*²` no es más que la grafía en superíndice que tiene Raku para `* ** 2`: el `²` es un operador de potencia postfijo, así que `*²` es un `WhateverCode` que eleva al cuadrado su argumento. Escribe `* ** 2` si lo prefieres.

1. `.hyper` paraleliza la cadena entera — el `grep` que conserva los números por encima de `10` y el `map` que los eleva al cuadrado — preservando el orden.

1. Como el orden se conserva, los cuadrados vuelven en la misma secuencia que sus entradas (`11²`, `12²`, …, `20²`), dando `(121 144 169 196 225 256 289 324 361 400)`.

{% include nav.html %}
