---
title: Kvizo — Funkciaj parametroj
---

{% include menu.html %}

Elektu tiujn opciojn kie la funkcia subskribo estas ĝusta.

{:.quiz}
1 | sub f($x) {. . .}
1 | sub f() {. . .} | Neniuj parametroj estas valida situacio.
1 | sub f {. . .} | Parentezoj ne estas bezonataj ĉi tie.
0 | sub f $x {. . .} | Sed ili estas bezonataj se estas parametroj.
1 | sub f($x, $y) {. . .}
0 | sub f($x $y) {. . .} | Parametroj estas komo-separita listo.
1 | sub f($x,$y) {. . .} | Estas via decido meti aŭ preterlasi spacon inter parametroj.
1 | sub f($y, $x) {. . .} | Parametroj povas havi ajnajn nomojn en ajna ordo.
0 | sub f ($x), ($y) {. . .} | Neekzistanta sintakso.

{% include quiz.html %}

{% include nav.html %}