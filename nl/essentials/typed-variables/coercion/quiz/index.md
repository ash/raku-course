---
title: Quiz — Type constraints
---

{% include menu.html %}

Selecteer de toegestane toewijzingen in Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` is `Num`, dus het kan niet direct toegewezen worden aan een `Int`.
0 | my Rat $c = π.Int; | Zelfs als `π.Int` `3` is en van een 'nauwer' type dan `Rat`, is het niet mogelijk om toe te wijzen.
1 | my Rat $d = π.Str.Rat; | Dubbele typeconversie, gewoon voor de lol, er is geen bijzonder nut in, maar het is legaal.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}