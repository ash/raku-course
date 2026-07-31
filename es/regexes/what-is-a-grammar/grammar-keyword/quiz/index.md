---
title: Quiz — Qué es una gramática
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my token greet { 'hi' }

say so 'hi there' ~~ / <greet> /;
```

{:.quiz}
1 | True
0 | False
0 | ｢greet｣
0 | hi

{% include quiz.html %}

<div class="extended-explanation">

El token con nombre `greet` empareja el texto literal `hi`. Llamarlo como `<greet>` dentro del patrón busca ese texto, que está presente al principio de `'hi there'`, así que la coincidencia funciona y `so` devuelve `True`.

</div>

{% include nav.html %}
