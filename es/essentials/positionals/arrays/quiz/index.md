---
title: Quiz — Arrays
---

{% include menu.html %}

Hay un array:

```raku
my @data = 10, 20, 30, 40, 50;
```

## Elementos del array

¿Qué imprimen las siguientes líneas?

{:.quiz-select}

10 | `say @data[0];` — (: 10, 20, 30, 40, 50 :) | No olvides que los elementos se cuentan desde `0`.
40 | `say @data[3];` — (: 10, 20, 30, 40, 50 :) | El índice `3` representa el 4<sup>to</sup> elemento.
50 | `say @data[4];` — (: 10, 20, 30, 40, 50 :)

## Longitud del array

¿Qué imprimen las siguientes declaraciones?

{:.quiz-select}
5 | `say @data.elems;` — (: 0, 1, 2, 3, 4, 5 :)
5 | `say +@data;` — (: 0, 1, 2, 3, 4, 5 :) | Esta conversión da el tamaño del array.
5 | `say +@data.elems;` — (: 0, 1, 2, 3, 4, 5 :) | Convertir el resultado de `@data.elems` a un entero, por lo tanto, no hay cambio.


{% include quiz.html %}

{% include nav.html %}