---
title: 'Cuestionario: Números racionales'
---

{% include menu.html %}

Seleccione los números que son `Rat` en Raku.

<!--0 | ↉ | Este es un número `Int`, y su valor es `0`.-->

{:.quiz}
1 | 3/64 | Este es un número `Rat`, no una división de dos enteros.
1 | ⅞
1 | 2.718281828459045 | Esa es una aproximación del valor de la constante de Euler, pero sigue siendo un `Rat`, ya que no es infinitamente largo.
1 | 10_230/50_245 | También puedes usar el separador `_` aquí.
1 | 10.345_678 | Y aquí.
0 | 10.345,678 | Una coma aquí no es ni una coma decimal ni un separador.
1 | <33/44> | Otra forma de escribir números racionales en Raku.
0 | <33 44> | Esta es una lista de cadenas (lo veremos más adelante en el curso).
0 | &apos;<33 44>&apos; | Esto es una cadena.
1 | ⅞/⅚ | Esta es una división de dos números `Rat`, pero el resultado también es un número `Rat`.

{% include quiz.html %}

{% include nav.html %}