---
title: Quiz — Parametri di funzione
---

{% include menu.html %}

Scegli le opzioni in cui la firma della funzione è corretta.

{:.quiz}
1 | sub f($x) {. . .}
1 | sub f() {. . .} | Nessun parametro è una situazione valida.
1 | sub f {. . .} | Le parentesi non sono richieste qui.
0 | sub f $x {. . .} | Ma sono richieste se ci sono parametri.
1 | sub f($x, $y) {. . .}
0 | sub f($x $y) {. . .} | I parametri sono una lista separata da virgole.
1 | sub f($x,$y) {. . .} | Sta a te decidere se mettere o meno lo spazio tra i parametri.
1 | sub f($y, $x) {. . .} | I parametri possono avere qualsiasi nome in qualsiasi ordine.
0 | sub f ($x), ($y) {. . .} | Sintassi inesistente.

{% include quiz.html %}

{% include nav.html %}