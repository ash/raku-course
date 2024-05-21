---
title: Quiz — Restricciones de tipo
---

{% include menu.html %}

Selecciona las asignaciones permitidas en Raku.

{:.quiz}
1 | my Int $a = π.Int;
0 | my Int $b = π; | `π` es `Num`, por lo que no se puede asignar directamente a un `Int`.
0 | my Rat $c = π.Int; | Aunque `π.Int` es `3` y es de un tipo ‘más estrecho’ que `Rat`, no es posible asignarlo.
1 | my Rat $d = π.Str.Rat; | Doble conversión de tipo, solo por diversión, no tiene un sentido particular, pero es legal.
0 | my Num $e = π.Int;
1 | my Num $f = π.Int.Str.Num;

{% include quiz.html %}

{% include nav.html %}