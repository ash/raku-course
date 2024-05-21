---
title: Quiz — Functieparameters
---

{% include menu.html %}

Kies die opties waar de functiedeclaratie correct is.

{:.quiz}
1 | sub f($x) {. . .}
1 | sub f() {. . .} | Geen parameters is een geldige situatie.
1 | sub f {. . .} | Haakjes zijn hier niet vereist.
0 | sub f $x {. . .} | Maar ze zijn vereist als er parameters zijn.
1 | sub f($x, $y) {. . .}
0 | sub f($x $y) {. . .} | Parameters zijn een door komma's gescheiden lijst.
1 | sub f($x,$y) {. . .} | Het is aan jou om wel of geen spatie tussen parameters te zetten.
1 | sub f($y, $x) {. . .} | Parameters kunnen willekeurige namen in willekeurige volgorde hebben.
0 | sub f ($x), ($y) {. . .} | Niet-bestaande syntax.

{% include quiz.html %}

{% include nav.html %}