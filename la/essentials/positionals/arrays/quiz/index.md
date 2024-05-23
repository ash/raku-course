---
title: Quiz — Arrays
---

{% include menu.html %}

Est array:

```raku
my @data = 10, 20, 30, 40, 50;
```

## Elementa Array

Quid sequentes lineae imprimunt?

{:.quiz-select}

10 | `say @data[0];` — (: 10, 20, 30, 40, 50 :) | Noli oblivisci elementa numerari ab `0`.
40 | `say @data[3];` — (: 10, 20, 30, 40, 50 :) | Index `3` significat quartum element.
50 | `say @data[4];` — (: 10, 20, 30, 40, 50 :)

## Longitudo Array

Quid sequentes sententiae imprimunt?

{:.quiz-select}
5 | `say @data.elems;` — (: 0, 1, 2, 3, 4, 5 :)
5 | `say +@data;` — (: 0, 1, 2, 3, 4, 5 :) | Haec conversio dat magnitudinem array.
5 | `say +@data.elems;` — (: 0, 1, 2, 3, 4, 5 :) | Convertens resultatum `@data.elems` ad integrum, ergo nulla mutatio.


{% include quiz.html %}

{% include nav.html %}