---
title: Kvizo — Tipaj limigoj
---

{% include menu.html %}

Elektu la permesitajn asignojn en Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` estas `Num`, do ĝi ne povas esti rekte asignita al `Int`.
0 | my Rat $c = π.Int; | Eĉ se `π.Int` estas `3` kaj estas de ‘pli mallarĝa’ tipo ol `Rat`, ĝi ne estas asignita.
1 | my Rat $d = π.Str.Rat; | Duobla tipa konvertiĝo, nur por amuzo, ne estas aparta senco en ĝi, sed ĝi estas laŭleĝa.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}