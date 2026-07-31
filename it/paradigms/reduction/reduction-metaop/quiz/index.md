---
title: Quiz — Il metaoperatore di riduzione
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

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

`[min]` riduce l'elenco con l'operatore `min`, confrontando gli elementi a coppie e tenendo il più piccolo. Il più piccolo di `8, 3, 5, 1` è `1`.

</div>

{% include nav.html %}
