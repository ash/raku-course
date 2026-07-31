---
title: 'Solution: Un Whatever de dos argumentos'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $join = * ~ '-' ~ *;

say $join('a', 'b');
```

🦋 Encuentra el programa en el archivo [two-arg-whatever.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/two-arg-whatever.raku).

## Salida

```
a-b
```

## Comentarios

1. La expresión contiene dos estrellas, por lo que Raku construye un `WhateverCode` que toma dos argumentos — la primera estrella es el primer argumento, la segunda estrella es el segundo.

1. Llamar a `$join('a', 'b')` rellena las estrellas en orden, dando `'a' ~ '-' ~ 'b'`, que es `a-b`.

{% include nav.html %}
