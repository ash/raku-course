---
title: Quiz — Function parameters
---

{% include menu.html %}

Elige aquellas opciones donde la firma de la función es correcta.

{:.quiz}
1 | sub f($x) {. . .}
1 | sub f() {. . .} | Nulla parametra valida est.
1 | sub f {. . .} | Parentheses hic non requiruntur.
0 | sub f $x {. . .} | Sed requiruntur si sunt parametra.
1 | sub f($x, $y) {. . .}
0 | sub f($x $y) {. . .} | Parametra sunt comma-separata.
1 | sub f($x,$y) {. . .} | Ad te pertinet spatium inter parametra ponere vel omittere.
1 | sub f($y, $x) {. . .} | Parametra possunt habere nomina quaelibet in ordine quolibet.
0 | sub f ($x), ($y) {. . .} | Syntaxin non-existentem.

{% include quiz.html %}

{% include nav.html %}