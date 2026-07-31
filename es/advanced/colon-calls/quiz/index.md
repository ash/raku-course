---
title: Quiz — La llamada con dos puntos
---

{% include menu.html %}

Que imprime el siguiente programa?

```raku
say 'programming'.substr: 0, 3;
```

{:.quiz}
1 | pro
0 | program
0 | ing
0 | (0 3)

{% include quiz.html %}

<div class="extended-explanation">

Los dos puntos consumen *todo* el resto de la sentencia como lista de argumentos, así que `substr: 0, 3` es lo mismo que `substr(0, 3)` — ambos argumentos se pasan. Comenzando en el índice `0` y tomando `3` caracteres se obtiene `pro`.

</div>

{% include nav.html %}
