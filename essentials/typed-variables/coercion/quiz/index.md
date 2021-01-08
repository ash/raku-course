---
title: Quiz — Type constraints
---

{% include menu.html %}

Select the allowed assignments in Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` is `Num`, so it cannot be directly assigned to an `Int`.
0 | my Rat $c = π.Int; | Even if `π.Int` is `3` and is of a ‘narrower’ type than `Rat`, it is not possible to assign.
1 | my Rat $d = π.Str.Rat; | Double type conversion, just for fun, there’s no particular sense in it, but it is legal.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}
