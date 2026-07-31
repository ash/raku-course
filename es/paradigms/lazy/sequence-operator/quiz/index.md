---
title: Quiz — El operador de secuencia
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say (3, 6 ... 15);
```

{:.quiz}
0 | (3 6)
0 | (3 6 15)
1 | (3 6 9 12 15)
0 | (3 6 9 12 15 18)

{% include quiz.html %}

<div class="extended-explanation">

De `3, 6` el operador infiere un paso de `+3` y continúa hasta llegar al punto final `15`: `3, 6, 9, 12, 15`.

</div>

{% include nav.html %}
