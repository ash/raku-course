---
title: Quiz — Sequenze pigre
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

`(2, 4, 6 ... *)` è la sequenza infinita dei numeri pari. Contando da indice zero, l'elemento `5` è il sesto numero pari, `12`. Grazie alla pigrizia vengono calcolati solo gli elementi necessari.

</div>

{% include nav.html %}
