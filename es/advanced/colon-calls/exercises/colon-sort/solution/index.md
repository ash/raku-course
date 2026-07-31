---
title: 'Solution: Sort con dos puntos'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 Encuentra el programa en el archivo [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Salida

```
(fig pear kiwi apple)
```

## Comentarios

1. Los dos puntos pasan la clave de ordenamiento a `sort` sin necesidad de paréntesis alrededor.

1. `*.chars` es una expresión Whatever que significa "el numero de caracteres de cada elemento". `sort` la usa como clave, así que las palabras salen de la más corta primero: `fig` (3), luego `pear` y `kiwi` (4), luego `apple` (5).

1. `pear` mantiene su posición delante de `kiwi` porque tienen la misma longitud y `sort` es estable, preservando el orden original de las claves iguales.

{% include nav.html %}
