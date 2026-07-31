---
title: Quiz — Pragmata
---

{% include menu.html %}

Cum pragma defectu `strict` in Raku vigens est, quid accidit cum variabili quam numquam declaravisti assignas, ut in `$x = 42`?

{:.quiz}
1 | Error tempore compilationis est
0 | Silenter `$x` creat
0 | Admonitionem imprimit sed currit
0 | `$x` ad `Nil` statuit

{% include quiz.html %}

<div class="extended-explanation">

`strict` ex defectu activum est et requirit ut omnis variabilis prius cum `my` declaretur, itaque nudum `$x = 42` compilari non potest — *Variable '$x' is not declared*. Pragma deactivando cum `no strict` assignationem permitteret.

</div>

{% include nav.html %}
