---
title: Viktorīna — Funkciju parametri
---

{% include menu.html %}

Izvēlieties tās opcijas, kur funkcijas paraksts ir pareizs.

{:.quiz}
1 | sub f($x) {. . .}
1 | sub f() {. . .} | Parametru neesamība ir derīga situācija.
1 | sub f {. . .} | Šeit iekavas nav nepieciešamas.
0 | sub f $x {. . .} | Bet tās ir nepieciešamas, ja ir parametri.
1 | sub f($x, $y) {. . .}
0 | sub f($x $y) {. . .} | Parametri ir ar komatu atdalīts saraksts.
1 | sub f($x,$y) {. . .} | Jūsu ziņā ir likt vai izlaist atstarpi starp parametriem.
1 | sub f($y, $x) {. . .} | Parametriem var būt jebkādi nosaukumi jebkurā secībā.
0 | sub f ($x), ($y) {. . .} | Nepastāvoša sintakse.

{% include quiz.html %}

{% include nav.html %}