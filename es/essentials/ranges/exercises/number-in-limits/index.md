---
title: 'Ejercicio: Si el número está dentro de los límites'
---

{% include menu.html %}

## Problema

Escribe un programa que pida ingresar tres números: `$begin`, `$end` y `$n` y que imprima `True` o `False` dependiendo de si `$n` está en el rango `[$begin, $end)` (incluyendo `$begin` pero excluyendo `$end`).

Por favor, asume que los números ingresados satisfacen la condición: `$begin < $end + 1`, pero no agregues código para verificarlo.

## Ejemplo

El posible resultado del programa para ambos casos se muestra a continuación:

```console
$ raku number-in-limits.raku
Desde (incluyendo): 10
Hasta (excluyendo): 20
¿Cuál es el número? 15
True

$ raku number-in-limits.raku
Desde (incluyendo): 10
Hasta (excluyendo): 20
¿Cuál es el número? 30
False
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}