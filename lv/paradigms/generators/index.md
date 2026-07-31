---
title: Ģeneratori
translations_gpt:
---

{% include menu.html %}

_Ģenerators_ ir procedūra, kas rada vērtību rindu pa vienai, atdodot katru pēc pieprasījuma, nevis uzbūvējot visu sarakstu uzreiz. Raku to raksta ar pāri `gather` / `take`: `gather` bloka iekšienē katrs `take` pasniedz vienu vērtību iegūstamajai virknei, un bloks turpat apstājas, līdz tiek izvilkta nākamā vērtība.

Tā kā vērtības tiek radītas slinki — tikai tad, kad tās prasa —, ģenerators var aprakstīt pat bezgalīgu rindu. Šī sadaļa parāda, kā virknes būvēt ar `gather` un `take`. Zemāka līmeņa mehānika, kas šīs vērtības tiešām izvelk pa vienai, ir nākamās sadaļas — [Iteratoru](/lv/paradigms/iterators) — priekšmets.

{% include nav.html %}
