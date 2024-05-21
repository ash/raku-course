---
title: Quiz — Definieren von Standardwerten
---

{% include menu.html %}

Welche Funktionen sind korrekt definiert?

## 1

Funktionen mit Positionsparametern:

{:.quiz}
1 | sub p1($a = 3) {}
1 | sub p2($a, $b = 3) {}
0 | sub p4($a = 3, $b) {} | Alle Standardwerte müssen am Ende der Parameterliste stehen.
1 | sub p3($a = 3, $b = 4) {}

## 2 

Funktionen mit benannten Parametern:

{:.quiz}
1 | sub n1(:$a = 3) {}
1 | sub n2(:$a, :$b = 3) {}
1 | sub n4(:$a = 3, :$b) {} | Im Gegensatz zu Positionsparametern spielt die Reihenfolge der benannten Parameter keine Rolle.
1 | sub n3(:$a = 3, :$b = 4) {}

{% include quiz.html %}

{% include nav.html %}