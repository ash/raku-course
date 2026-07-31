---
title: Quiz — Secuencias perezosas
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
say (2, 4, 6 ... *)[5];
```

{:.quiz}
0 | 10
1 | 12
0 | 14
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

`(2, 4, 6 ... *)` es la secuencia infinita de los números pares. Contando desde el índice cero, el elemento `5` es el sexto número par, `12`. Gracias a la pereza, solo se calculan tantos elementos como hagan falta.

</div>

{% include nav.html %}
