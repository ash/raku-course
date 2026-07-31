---
title: Quiz — Il MOP
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
class Point {
    has $.x;
    has $.y;
}

say Point.^attributes.elems;
```

{:.quiz}
0 | 1
1 | 2
0 | (Point)
0 | un errore

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` è un metametodo — chiamato con `.^` sul metaoggetto del tipo — che elenca gli attributi dichiarati da un tipo, e `.elems` li conta. `Point` dichiara due attributi, `$.x` e `$.y`, quindi stampa `2`.

</div>

{% include nav.html %}
