---
title: Quiz — Junctions
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say so 4 == all(2, 4, 6);
```

{:.quiz}
0 | True
1 | False
0 | all(2, 4, 6)
0 | 4

{% include quiz.html %}

<div class="extended-explanation">

Una unión `all` es verdadera solo cuando coincide **todo** valor. La prueba `4 == all(2, 4, 6)` pregunta si `4` es igual a `2` y a `4` y a `6`, cosa que no ocurre, así que el resultado es `False`.

¿Tienes curiosidad por saber qué *podría* hacerlo `True`? El lado izquierdo tendría que ser igual a `2`, `4` y `6` a la vez. Ningún número por sí solo puede, pero una unión a la izquierda sí: funciona una unión `any` que **incluya los tres** valores, porque entonces todas las comparaciones se cumplen. Los dos lados no tienen por qué ser del mismo tamaño: el izquierdo puede llevar valores de más:

```raku
say so any(2, 4, 6, 8) == all(2, 4, 6); # True
say so any(2, 4)       == all(2, 4, 6); # False
```

La primera es `True` porque `any(2, 4, 6, 8)` sigue siendo igual a `2`, `4` y `6` (el `8` de más es inofensivo). La segunda es `False` porque el lado izquierdo no tiene ningún `6`, así que `left == 6` falla.

</div>

{% include nav.html %}
