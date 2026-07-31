---
title: Quiz — Lambdas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
my &f = -> $x { $x + $x };
say f(9);
```

{:.quiz}
0 | 9
1 | 18
0 | 81
0 | 99

{% include quiz.html %}

<div class="extended-explanation">

El bloque con flecha es una lambda que suma su argumento consigo mismo. Llamada con `9`, devuelve `9 + 9`, que es `18`.

</div>

{% include nav.html %}
