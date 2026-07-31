---
title: Quiz — Anclas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say so 'I have a dog' ~~ /<< dog >>/;
```

{:.quiz}
1 | True
0 | False
0 | ｢dog｣
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

El patrón exige que `dog` sea una palabra entera. En `I have a dog`, `dog` está sola, con un espacio delante y el final de la cadena detrás, así que hay un límite de palabra a cada lado, la coincidencia funciona y `so` devuelve `True`.

</div>

{% include nav.html %}
