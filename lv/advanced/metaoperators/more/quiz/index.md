---
title: Viktorīna — Hiper un krustojums
translations_gpt:
---

{% include menu.html %}

Ko izdrukā šī programma?

```raku
say (1, 2, 3) »+» 10;
```

{:.quiz}
1 | (11 12 13)
0 | (11 2 3)
0 | 16
0 | 6

{% include quiz.html %}

<div class="extended-explanation">

Hiper metaoperators `»+»` piemēro `+` katram elementam. Ar vienu vērtību `10` labajā pusē šī vērtība tiek izstiepta pār visu sarakstu, tāpēc katrs elements iegūst `10`: `(11 12 13)`. (Redukcija `[+]` tā vietā samazinātu sarakstu līdz vienai summai `6`.)

</div>

{% include nav.html %}
