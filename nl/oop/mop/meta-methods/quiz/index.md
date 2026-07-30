---
title: 'Quiz — Het MOP'
translations_gpt:
---

{% include menu.html %}

Wat drukt het volgende programma af?

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
0 | een fout

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` is een metamethode — aangeroepen met `.^` op het metaobject van het type — die de attributen opsomt die een type declareert, en `.elems` telt ze. `Point` declareert twee attributen, `$.x` en `$.y`, dus wordt `2` afgedrukt.

</div>

{% include nav.html %}
