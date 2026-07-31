---
title: Generiloj
translations_gpt:
---

{% include menu.html %}

_Generilo_ estas rutino, kiu produktas serion da valoroj unu post la alia, liverante ĉiun laŭpete anstataŭ konstrui la tutan liston anticipe. Raku skribas ĝin per la paro `gather` / `take`: ene de bloko `gather`, ĉiu `take` transdonas unu valoron al la rezulta sekvenco, kaj la bloko paŭzas ĝuste tie ĝis la sekva valoro estas tirata.

Ĉar la valoroj estas produktataj maldiligente — nur kiam oni petas ilin — generilo povas eĉ priskribi senfinan serion. Ĉi tiu sekcio montras, kiel konstrui sekvencojn per `gather` kaj `take`. La pli malaltnivela mekanismo, kiu efektive tiras tiujn valorojn eksteren, unu post la alia, estas la temo de la sekva sekcio, [Iterviloj](/eo/paradigms/iterators).

{% include nav.html %}
