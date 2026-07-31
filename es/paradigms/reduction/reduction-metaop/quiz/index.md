---
title: Quiz — El metaoperador de reducción
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say [min] 8, 3, 5, 1;
```

{:.quiz}
0 | 17
1 | 1
0 | 8
0 | 3

{% include quiz.html %}

<div class="extended-explanation">

`[min]` reduce la lista con el operador `min`, comparando los elementos por pares y quedándose con el menor. El menor de `8, 3, 5, 1` es `1`.

</div>

{% include nav.html %}
