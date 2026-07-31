---
title: Quiz — Desbordamiento
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
my int8 $i = -128;
$i--;
say $i;
```

{:.quiz}
1 | 127
0 | -129
0 | -128
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

Un `int8` contiene valores de `-128` a `127`. El desbordamiento también ocurre en el límite inferior: decrementar el valor más pequeño no puede dar `-129`, así que se envuelve al valor más grande, `127`.

</div>

{% include nav.html %}
