---
title: 'Quiz — Das MOP'
translations_gpt:
---

{% include menu.html %}

Was gibt das folgende Programm aus?

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
0 | ein Fehler

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` ist eine Metamethode — mit `.^` auf dem Metaobjekt des Typs aufgerufen —, die die von einem Typ deklarierten Attribute auflistet, und `.elems` zählt sie. `Point` deklariert zwei Attribute, `$.x` und `$.y`, daher wird `2` ausgegeben.

</div>

{% include nav.html %}
