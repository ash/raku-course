---
title: Quiz — Entrecomillado
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
say q{a\nb};
```

{:.quiz}
1 | a\nb
0 | a<newline>b
0 | ab
0 | anb

{% include quiz.html %}

<div class="extended-explanation">

El operador `q` funciona como las comillas simples: no procesa secuencias de escape con barra invertida como `\n`. Por lo tanto, la cadena conserva los cuatro caracteres `a`, `\`, `n`, `b`. Solo una forma con interpolación como `qq` (o las comillas dobles) convertiría `\n` en un salto de línea real.

</div>

{% include nav.html %}
