---
title: 'Solution: Factorial'
---

{% include menu.html %}

Un factorial de `N` es un producto de números enteros desde 1 hasta e incluyendo `N`. Por ejemplo, el factorial de 4 es 1 * 2 * 3 * 4 = 24.

## Código

```raku
my $n = 8;

my $f = 1;
$f *= $_ for 2..$n;

say $f;
```

🦋 Encuentra el programa en el archivo [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/factorial.raku).

## Salida

Ejecuta el programa varias veces y prueba diferentes valores de `$n`.

```console
$ raku exercises/loops/factorial.raku
40320
```

## Comentarios

Este programa utiliza el operador `*=`, que es un atajo para la multiplicación con la asignación: `$x *= $y` es equivalente a `$x = $x * $y`.

Puedes usar un bucle ‘completo’ en lugar de una forma postfija:

```raku
my $n = 8;

my $f = 1;
for 2..$n -> $x {
    $f *= $x;
}

say $f;
```

## Más sobre este tema

Volveremos a esta tarea varias veces. En esta parte del curso, también resolveremos este problema de manera recursiva.

En la segunda parte del curso, aprenderemos sobre los llamados operadores de reducción, que hacen que la solución sea trivial. Además, habrá una forma de definir un operador personalizado `!` para que puedas escribir `$n!` para calcular un factorial. Finalmente, habrá otra oportunidad de ver una solución interesante cuando hablemos sobre la cláusula `where`.

{% include nav.html %}