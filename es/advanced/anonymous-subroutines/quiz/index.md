---
title: Quiz — Bloques pointy
translations_gpt:
---

{% include menu.html %}

¿Que imprime el siguiente programa?

```raku
(-> $a, $b { $a * $b })(3, 4).say
```

{:.quiz}
1 | 12
0 | 7
0 | 34
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Un bloque puntiagudo puede enumerar varios parámetros: `-> $a, $b` toma dos. Aquí no se almacena en una variable en absoluto: se envuelve entre paréntesis y se llama directamente con `(3, 4)`, asignando `$a` a `3` y `$b` a `4`. El bloque los multiplica para dar `12`, y el `.say` postfijo lo imprime.

</div>

{% include nav.html %}
