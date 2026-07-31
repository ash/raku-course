---
title: Quiz — El árbol de coincidencias
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
grammar Point {
    token TOP { <x> ',' <y> }
    token x   { \d+ }
    token y   { \d+ }
}

say Point.parse('3,4')<y>;
```

{:.quiz}
0 | ｢3｣
1 | ｢4｣
0 | ｢3,4｣
0 | ｢y｣

{% include quiz.html %}

<div class="extended-explanation">

Cada token se convierte en una rama con nombre del árbol de coincidencias. `<y>` sobre el resultado llega al token `y`, que emparejó `4`, así que el programa imprime `｢4｣`.

</div>

{% include nav.html %}
