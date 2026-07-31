---
title: 'Solution: Solo enteros'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my Int $cars;

$cars = 250.7.Int;
say $cars;
say $cars.WHAT;
```

🦋 Encuentra el programa en el archivo [integers-only.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/integers-only.raku).

## Salida

```
250
(Int)
```

## Comentarios

1. La restricción de tipo `Int` en `my Int $cars` hace que el contenedor rechace cualquier valor que no sea un entero. Una asignación directa de `250.7` (un `Rat`) sería un error en tiempo de compilación.

1. Llamar a `.Int` sobre el valor racional `250.7` lo convierte al entero `250` eliminando la parte fraccionaria. El valor convertido se ajusta al contenedor. Asegúrate de no confundir este comportamiento con el redondeo.

1. El pseudo-método `.WHAT` confirma que el valor almacenado en el contenedor es de tipo `Int`.

{% include nav.html %}
