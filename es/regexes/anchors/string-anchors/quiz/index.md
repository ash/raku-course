---
title: Quiz — Anclas de cadena
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente? Fíjate en el `$` al final del patrón.

```raku
say so 'hello world' ~~ / world $/;
```

{:.quiz}
1 | True
0 | False
0 | ｢world｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

El ancla `$` exige que la coincidencia termine justo al final de la cadena. La cadena `hello world` sí termina en `world`, así que el patrón anclado funciona y `so` devuelve `True`.

</div>

{% include nav.html %}
