---
title: Kvizo — Arrayoj
---

{% include menu.html %}

Estas arrayo:

```raku
my @data = 10, 20, 30, 40, 50;
```

## Elementoj de arrayo

Kion presas la sekvaj linioj?

{:.quiz-select}

10 | `say @data[0];` — (: 10, 20, 30, 40, 50 :) | Ne forgesu, ke la elementoj estas nombritaj ekde `0`.
40 | `say @data[3];` — (: 10, 20, 30, 40, 50 :) | La indekso `3` signifas la 4<sup>a</sup> elementon.
50 | `say @data[4];` — (: 10, 20, 30, 40, 50 :)

## Longeco de arrayo

Kion presas la sekvaj deklaroj?

{:.quiz-select}
5 | `say @data.elems;` — (: 0, 1, 2, 3, 4, 5 :)
5 | `say +@data;` — (: 0, 1, 2, 3, 4, 5 :) | Ĉi tiu konvertiĝo donas la grandecon de la arrayo.
5 | `say +@data.elems;` — (: 0, 1, 2, 3, 4, 5 :) | Ĵetante la rezulton de `@data.elems` al entjero, do neniu ŝanĝo.


{% include quiz.html %}

{% include nav.html %}