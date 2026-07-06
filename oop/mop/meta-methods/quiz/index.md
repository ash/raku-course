---
title: 'Quiz — The MOP'
---

{% include menu.html %}

What does the following program print?

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
0 | an error

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` is a meta-method — called with `.^` on the type’s metaobject — that lists the attributes a type declares, and `.elems` counts them. `Point` declares two attributes, `$.x` and `$.y`, so it prints `2`.

</div>

{% include nav.html %}
