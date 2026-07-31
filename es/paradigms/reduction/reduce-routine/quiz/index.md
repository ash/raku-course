---
title: Quiz — Reducción
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say (10, 1, 2, 3).reduce(* - *);
```

{:.quiz}
1 | 4
0 | 8
0 | 16
0 | -4

{% include quiz.html %}

<div class="extended-explanation">

`reduce` pliega la lista de izquierda a derecha, y el **primer** argumento del bloque es siempre el resultado obtenido hasta el momento, aquí el operando izquierdo de `-`. Así que calcula `((10 - 1) - 2) - 3`, es decir `9 - 2 - 3 = 4`. Plegar en el otro sentido, `10 - (1 - (2 - 3))`, daría `8`, y sumar en lugar de restar daría `16`. A diferencia de `+`, la resta depende del orden, así que los papeles de los dos argumentos importan de verdad.

</div>

{% include nav.html %}
