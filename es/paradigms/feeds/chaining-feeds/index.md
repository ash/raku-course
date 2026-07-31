---
title: Encadenar flujos
translations_gpt:
---

{% include menu.html %}

El verdadero valor de los flujos aparece cuando tienes varias etapas. Cada `==>` pasa su resultado a la operación siguiente, así que la tubería entera se lee de arriba abajo en el orden en que ocurre el trabajo:

```raku
(1..10)
    ==> grep(* %% 2)
    ==> map(* ** 2)
    ==> my @result;

say @result; # [4 16 36 64 100]
```

Sigue los datos página abajo: empieza con `1..10`, conserva los números pares, eleva cada uno al cuadrado y recoge el resultado. Los números pares son `2, 4, 6, 8, 10`, y sus cuadrados son `4, 16, 36, 64, 100`.

Escrita como cadena de métodos, la misma tubería es `(1..10).grep(* %% 2).map(* ** 2)`, y eso se lee de izquierda a derecha igual que el flujo. Una cadena de métodos no va de dentro afuera; ejecuta sus etapas exactamente en el mismo orden. La forma que sí se lee de dentro afuera es anidar las operaciones como funciones normales, `map(* ** 2, grep(* %% 2, 1..10))`, donde tienes que empezar por la llamada más interna e ir saliendo.

Un flujo, por tanto, no es una manera de escapar del código de dentro afuera: es otra grafía de una tubería de izquierda a derecha. Lo que aporta es disposición: cada etapa `==>` puede ocupar su propia línea, y un mismo operador funciona igual tanto para pasos con forma de método como con forma de función, lo que mantiene fácil de recorrer una tubería larga. Los flujos y las cadenas de métodos hacen en el fondo el mismo trabajo; elige el que deje más clara cada transformación concreta.

{% include nav.html %}
