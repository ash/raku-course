---
title: 'Solution: Factorial con multi-funciones'
---

{% include menu.html %}

Este ejercicio trata nuevamente sobre factoriales. De hecho, la tarea nos permite ilustrar más características de Raku.

Al calcular un factorial comenzando desde el número dado y descendiendo, necesitas detenerte cuando el número llega a 1. Con multi-funciones, puedes lograr eso extrayendo el caso con `$n == 1` a una multi-función separada.

## Código

Aquí está la solución:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Encuentra el programa en el archivo [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/more-on-functions/factorial-with-multi-functions.raku).

## Salida

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Comentario

Ten en cuenta que el argumento de entrada se convierte explícitamente a un entero: `@*ARGS[0].Int`. Esto es para prevenir un bucle infinito cuando el número de entrada es `1`. En este caso, el tipo de parámetro pasado a la función `factorial` es [`IntStr`](/es/essentials/typed-variables/allomorphs), y la primera variante múltiple no puede capturar la llamada. En contraste, cuando `factorial(2 - 1)` se llama recursivamente, el argumento de la función es un entero, lo que hace posible llamar a la primera variante.

{% include nav.html %}