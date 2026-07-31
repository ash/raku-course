---
title: 'Solution: Whatever con map'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $triple = * * 3;

say (1..4).map($triple);
```

🦋 Encuentra el programa en el archivo [whatever-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/whatever-map.raku).

## Salida

```
(3 6 9 12)
```

## Comentarios

1. `* * 3` es una expresión Whatever que se convierte en un `WhateverCode` de un argumento — un valor de función perfectamente ordinario guardado en `$triple`.

1. Como es simplemente una función, `map` la acepta como cualquier bloque, aplicandola a cada elemento de `1..4` para dar `(3 6 9 12)`.

{% include nav.html %}
