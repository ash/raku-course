---
title: Viktorīna — Metaobjektu protokols
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

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
0 | kļūda

{% include quiz.html %}

<div class="extended-explanation">

`.^attributes` ir metametode — izsaukta ar `.^` uz tipa metaobjekta —, kas uzskaita tipa deklarētos atribūtus, un `.elems` tos saskaita. `Point` deklarē divus atribūtus `$.x` un `$.y`, tāpēc tiek izdrukāts `2`.

</div>

{% include nav.html %}
