---
title: Quiz — Definire valori predefiniti
---

{% include menu.html %}

Quali funzioni sono definite correttamente?

## 1

Funzioni con parametri posizionali:

{:.quiz}
1 | sub p1($a = 3) {}
1 | sub p2($a, $b = 3) {}
0 | sub p4($a = 3, $b) {} | Tutti i valori predefiniti devono essere alla fine dell'elenco dei parametri.
1 | sub p3($a = 3, $b = 4) {}

## 2 

Funzioni con parametri nominati:

{:.quiz}
1 | sub n1(:$a = 3) {}
1 | sub n2(:$a, :$b = 3) {}
1 | sub n4(:$a = 3, :$b) {} | A differenza dei parametri posizionali, l'ordine di quelli nominati non importa.
1 | sub n3(:$a = 3, :$b = 4) {}

{% include quiz.html %}

{% include nav.html %}