---
title: Quiz — Funktionsparameter
---

{% include menu.html %}

Wählen Sie die Optionen aus, bei denen die Funktionssignatur korrekt ist.

{:.quiz}
1 | sub f($x) {. . .}
1 | sub f() {. . .} | Keine Parameter sind eine gültige Situation.
1 | sub f {. . .} | Klammern sind hier nicht erforderlich.
0 | sub f $x {. . .} | Aber sie sind erforderlich, wenn es Parameter gibt.
1 | sub f($x, $y) {. . .}
0 | sub f($x $y) {. . .} | Parameter sind eine durch Kommas getrennte Liste.
1 | sub f($x,$y) {. . .} | Es liegt an Ihnen, ob Sie Leerzeichen zwischen den Parametern setzen oder nicht.
1 | sub f($y, $x) {. . .} | Parameter können beliebige Namen in beliebiger Reihenfolge haben.
0 | sub f ($x), ($y) {. . .} | Nicht existierende Syntax.

{% include quiz.html %}

{% include nav.html %}