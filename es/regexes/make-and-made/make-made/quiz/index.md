---
title: Quiz — make y made
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
grammar G {
    token TOP    { <number> { make $<number>.Int ** 2 } }
    token number { \d+ }
}

say G.parse('5').made;
```

{:.quiz}
0 | ｢5｣
0 | 5
1 | 25
0 | 55

{% include quiz.html %}

<div class="extended-explanation">

El bloque en línea guarda `$<number>.Int ** 2` en la coincidencia. El token capturó `5`; convertirlo en el entero `5` y elevarlo al cuadrado da `25`, que es lo que devuelve `made`.

</div>

{% include nav.html %}
