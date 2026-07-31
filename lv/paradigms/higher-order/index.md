---
title: Augstākas kārtas funkcijas
translations_gpt:
---

{% include menu.html %}

Raku valodā apakšprogramma ir parasta vērtība: to var saglabāt mainīgajā, padot citai apakšprogrammai un atgriezt kā rezultātu. Apakšprogrammu, kas **ņem** vai **atgriež** citu apakšprogrammu, sauc par _augstākas kārtas funkciju_, un tā ir funkcionālās programmēšanas sirds.

Augstākas kārtas funkcijas jūs jau esat lietojuši, tās nenosaucot — `map`, `grep` un `sort` visas ņem koda bloku kā argumentu. Šī sadaļa parāda, kā uzrakstīt savējās.

Šīs metodes, kas ņem blokus, ir arī dabiska vieta _kola izsaukuma_ formai, kas ļauj atmest iekavas: `(1..10).grep: * %% 2` vietā `(1..10).grep(* %% 2)`. Tā ieviesta sadaļā [Izsaukšana ar kolu](/lv/advanced/colon-calls), un saīsinājums `*`, ko tā izmanto, ir [Whatever zvaigznīte](/lv/advanced/whatever).

{% include nav.html %}
