---
title: Viktorīna — Samazināšana
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
say (10, 1, 2, 3).reduce(* - *);
```

{:.quiz}
1 | 4
0 | 8
0 | 16
0 | -4

{% include quiz.html %}

<div class="extended-explanation">

`reduce` saloka sarakstu no kreisās uz labo, un bloka **pirmais** arguments vienmēr ir līdzšinējais rezultāts — šeit tas ir `-` kreisais operands. Tātad tiek aprēķināts `((10 - 1) - 2) - 3`, tas ir, `9 - 2 - 3 = 4`. Salokot otrādi, `10 - (1 - (2 - 3))`, iznāktu `8`, un saskaitot atņemšanas vietā — `16`. Atšķirībā no `+` atņemšana ir atkarīga no secības, tāpēc abu argumentu lomas tiešām ir svarīgas.

</div>

{% include nav.html %}
