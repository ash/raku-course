---
title: Quiz — Arrays anidados
---

{% include menu.html %}

Hay un array de arrays:

```raku
my @data =
    [1.2, 2.3, 3.4],
    [4.5, 5.6, 6.7],
    [5.6, 6.7, 7.8],
    [6.7, 7.8, 8.9];
```

## Elementos individuales

¿Qué esperas ver en la salida en cada una de las siguientes líneas de código?

{:.quiz-code}
5.6 | say @data[1][1]; # ␣␣␣
1.2 | say @data[0][0]; # ␣␣␣
7.8 | say @data[2][2]; # ␣␣␣

## Comparando

Selecciona el resultado Booleano correcto de las siguientes comparaciones.

{:.quiz-select}
Falso | `@data[0][0] == @data[2][2]` es&nbsp; (: Falso, Verdadero :)
Verdadero | `@data[1][1] == @data[2][0]` es&nbsp; (: Falso, Verdadero :)

## Longitudes

¿Qué valor devuelven las siguientes llamadas al método `size`?

{:.quiz-select}
4 | `@data.elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[0].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)
3 | `@data[1].elems` —&nbsp; (: 1, 2, 3, 4, 5 :) 
3 | `@data[2].elems` —&nbsp; (: 1, 2, 3, 4, 5 :)

{% include quiz.html %}

{% include nav.html %}