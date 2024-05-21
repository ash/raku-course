---
title: Viktorīna — Masīvi
---

{% include menu.html %}

Ir masīvs:

```raku
my @data = 10, 20, 30, 40, 50;
```

## Masīva elementi

Ko izdrukā sekojošās rindas?

{:.quiz-select}

10 | `say @data[0];` — (: 10, 20, 30, 40, 50 :) | Neaizmirstiet, ka elementi tiek skaitīti no `0`.
40 | `say @data[3];` — (: 10, 20, 30, 40, 50 :) | Indekss `3` apzīmē 4<sup>to</sup> elementu.
50 | `say @data[4];` — (: 10, 20, 30, 40, 50 :)

## Masīva garums

Ko izdrukā sekojošie apgalvojumi?

{:.quiz-select}
5 | `say @data.elems;` — (: 0, 1, 2, 3, 4, 5 :)
5 | `say +@data;` — (: 0, 1, 2, 3, 4, 5 :) | Šī konversija dod masīva izmēru.
5 | `say +@data.elems;` — (: 0, 1, 2, 3, 4, 5 :) | Pārveidojot `@data.elems` rezultātu par veselu skaitli, tādējādi izmaiņu nav.


{% include quiz.html %}

{% include nav.html %}