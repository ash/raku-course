---
title: Quiz — Precedencia
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
say 2 * 3 ** 2;
```

{:.quiz}
1 | 18
0 | 36
0 | 12
0 | 81

{% include quiz.html %}

<div class="extended-explanation">

`**` tiene mayor precedencia que `*`, por lo que la exponenciación ocurre primero: `3 ** 2` es `9`, y luego `2 * 9` es `18`. Leerlo de izquierda a derecha como `(2 * 3) ** 2` daría la respuesta incorrecta, `36`.

</div>

{% include nav.html %}
