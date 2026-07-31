---
title: Kvizo — La metaobjekta protokolo
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

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
0 | eraron

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` estas metametodo — vokata per `.^` sur la metaobjekto de la tipo — kiu listigas la atributojn, kiujn tipo deklaras, kaj `.elems` kalkulas ilin. `Point` deklaras du atributojn, `$.x` kaj `$.y`, do ĝi presas `2`.

</div>

{% include nav.html %}
