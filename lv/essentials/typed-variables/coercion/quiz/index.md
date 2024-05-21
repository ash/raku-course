---
title: Viktorīna — Tipa ierobežojumi
---

{% include menu.html %}

Izvēlieties atļautos piešķīrumus Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` ir `Num`, tāpēc to nevar tieši piešķirt `Int`.
0 | my Rat $c = π.Int; | Pat ja `π.Int` ir `3` un ir ‘šaurāka’ tipa nekā `Rat`, to nav iespējams piešķirt.
1 | my Rat $d = π.Str.Rat; | Dubulta tipa konversija, tikai izklaidei, tam nav īpašas jēgas, bet tas ir legāli.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}