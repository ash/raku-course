---
title: Quiz — El operador `...`
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el siguiente programa?

```raku
say 1, 3, 9 ... 81;
```

{:.quiz}
1 | (1 3 9 27 81)
0 | (1 3 9 81)
0 | (1 3 5 7 ... 81)
0 | (3 9 27)

{% include quiz.html %}

<div class="extended-explanation">

Con *tres* valores semilla, `...` analiza la razón entre ellos: `1, 3, 9` se triplican, así que continúa geométricamente como `27, 81`. (Dos semillas en cambio establecerían un paso aritmético.)

</div>

{% include nav.html %}
