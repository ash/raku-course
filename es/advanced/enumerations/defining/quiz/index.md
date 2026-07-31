---
title: Quiz — Enumeraciones
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
enum Colour <red green blue>;
say green + blue;
```

{:.quiz}
1 | 3
0 | greenblue
0 | (green blue)
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

Cada constante representa un número, asignado desde cero en el orden en que se listaron: `red` es `0`, `green` es `1`, `blue` es `2`. En un contexto aritmético, las constantes actúan como esos números, por lo que `green + blue` es `1 + 2`, que es `3`.

</div>

{% include nav.html %}
