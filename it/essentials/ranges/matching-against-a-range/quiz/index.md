---
title: Confronto con un intervallo
---

{% include menu.html %}

Di seguito sono riportati diversi confronti con l'intervallo. Prova a trovare le risposte corrette.

## 1

{:.quiz-select}
Vero | `10 ~~ 0..20` è&nbsp; (: Vero, Falso :)
Vero | `10 ~~ ^20` è&nbsp; (: Vero, Falso :)
Vero | `0 ~~ ^10` è&nbsp; (: Vero, Falso :)
Falso | `10 ~~ 10^..15` è&nbsp; (: Vero, Falso :)
Vero | `11 ~~ 10..15` è&nbsp; (: Vero, Falso :)
Vero | `14 ~~ 10^..15` è&nbsp; (: Vero, Falso :)
Falso | `15 ~~ 10^..^15` è&nbsp; (: Vero, Falso :)

## 2

Un po' più complicato. E se confrontassimo un intervallo con un altro intervallo?

{:.quiz-select}
Vero | `2..3 ~~ 1..5 ` è&nbsp; (: Vero, Falso :)
Falso | `1..2 ~~ 5..6 ` è&nbsp; (: Vero, Falso :)
Falso | `1..5 ~~ 3..7 ` è&nbsp; (: Vero, Falso :)

{% include quiz.html %}

{% include nav.html %}