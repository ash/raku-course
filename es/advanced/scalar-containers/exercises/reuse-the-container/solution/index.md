---
title: 'Solution: Tipado o sin tipar'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $untyped;
my Int $typed;

dd $untyped;
dd $typed;

$untyped = 42;
$typed = 42;

dd $untyped;
dd $typed;
```

🦋 Encuentra el programa en el archivo [reuse-the-container.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/reuse-the-container.raku).

## Salida

```
$untyped = Any
Int $typed = Int
$untyped = 42
Int $typed = 42
```

## Comentarios

1. `dd` reporta los dos contenedores de manera diferente. Para el que no tiene tipo imprime solo `$untyped`, mientras que para el que tiene tipo le antepone el tipo declarado: `Int $typed`. Ese prefijo es exactamente la diferencia que marca un tipo declarado.

1. Los valores vacíos también difieren. Un contenedor sin tipo comienza con el valor indefinido básico `Any`, mientras que un contenedor con tipo comienza con el valor indefinido de *su* tipo, `Int`.

1. Después de que a ambos se les asigna `42`, los valores lucen iguales, pero `$typed` aun lleva su tipo y rechazaría un valor que no sea entero — a diferencia de `$untyped`, que acepta cualquier cosa.

{% include nav.html %}
