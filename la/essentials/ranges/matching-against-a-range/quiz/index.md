---
title: Matching against a range
---

{% include menu.html %}

Infra sunt complura comparationes contra spatium. Conare invenire responsa correcta.

## 1

{:.quiz-select}
Verum | `10 ~~ 0..20` est&nbsp; (: Verum, Falsum :)
Verum | `10 ~~ ^20` est&nbsp; (: Verum, Falsum :)
Verum | `0 ~~ ^10` est&nbsp; (: Verum, Falsum :)
Falsum | `10 ~~ 10^..15` est&nbsp; (: Verum, Falsum :)
Verum | `11 ~~ 10..15` est&nbsp; (: Verum, Falsum :)
Verum | `14 ~~ 10^..15` est&nbsp; (: Verum, Falsum :)
Falsum | `15 ~~ 10^..^15` est&nbsp; (: Verum, Falsum :)

## 2

Paulo difficilius. Quid si spatium contra aliud spatium comparare?

{:.quiz-select}
Verum | `2..3 ~~ 1..5 ` est&nbsp; (: Verum, Falsum :)
Falsum | `1..2 ~~ 5..6 ` est&nbsp; (: Verum, Falsum :)
Falsum | `1..5 ~~ 3..7 ` est&nbsp; (: Verum, Falsum :)

{% include quiz.html %}

{% include nav.html %}