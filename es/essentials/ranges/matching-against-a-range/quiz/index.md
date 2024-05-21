---
title: Coincidencia contra un rango
---

{% include menu.html %}

A continuación se muestran varias coincidencias contra el rango. Intenta encontrar las respuestas correctas.

## 1

{:.quiz-select}
Verdadero | `10 ~~ 0..20` es&nbsp; (: Verdadero, Falso :)
Verdadero | `10 ~~ ^20` es&nbsp; (: Verdadero, Falso :)
Verdadero | `0 ~~ ^10` es&nbsp; (: Verdadero, Falso :)
Falso | `10 ~~ 10^..15` es&nbsp; (: Verdadero, Falso :)
Verdadero | `11 ~~ 10..15` es&nbsp; (: Verdadero, Falso :)
Verdadero | `14 ~~ 10^..15` es&nbsp; (: Verdadero, Falso :)
Falso | `15 ~~ 10^..^15` es&nbsp; (: Verdadero, Falso :)

## 2

Un poco más complicado. ¿Qué pasa si coincides un rango contra otro rango?

{:.quiz-select}
Verdadero | `2..3 ~~ 1..5 ` es&nbsp; (: Verdadero, Falso :)
Falso | `1..2 ~~ 5..6 ` es&nbsp; (: Verdadero, Falso :)
Falso | `1..5 ~~ 3..7 ` es&nbsp; (: Verdadero, Falso :)

{% include quiz.html %}

{% include nav.html %}