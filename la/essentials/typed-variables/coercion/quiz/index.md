---
title: Quiz — Type constraints
---

{% include menu.html %}

Selige assignationes permissas in Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` est `Num`, ergo non potest directe assignari ad `Int`.
0 | my Rat $c = π.Int; | Etiamsi `π.Int` est `3` et est typus ‘angustior’ quam `Rat`, non potest assignari.
1 | my Rat $d = π.Str.Rat; | Duplex conversio typi, tantum ob delectationem, non est sensus particularis in eo, sed est legitimum.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}