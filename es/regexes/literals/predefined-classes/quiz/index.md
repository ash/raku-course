---
title: Quiz — Clases de caracteres
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say 'a_1 b' ~~ /\W/;
```

{:.quiz}
0 | ｢a｣
0 | ｢_｣
0 | ｢1｣
1 | ｢ ｣

{% include quiz.html %}

<div class="extended-explanation">

La clase `\W` empareja el primer carácter que **no** sea una letra, un dígito o un guion bajo. Los caracteres `a`, `_` y `1` son todos caracteres de palabra, así que el primero que no lo es es el espacio.

</div>

{% include nav.html %}
