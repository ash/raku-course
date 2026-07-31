---
title: 'Solution: Begin primero'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $compiled = BEGIN { 2 + 3 };

say $compiled;
```

🦋 Encuentra el programa en el archivo [begin-first.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/phasers/begin-first.raku).

## Salida

```
5
```

## Comentarios

1. `BEGIN { 2 + 3 }` se ejecuta durante la compilación y produce `5`. Usado como expresión, un bloque `BEGIN` devuelve su valor, que se asigna a `$compiled`.

1. El cálculo ocurre solo una vez, en tiempo de compilación; en tiempo de ejecución `$compiled` simplemente contiene la constante `5`. Así es como se usa `BEGIN` para precalcular valores, no solo para imprimir temprano.

{% include nav.html %}
