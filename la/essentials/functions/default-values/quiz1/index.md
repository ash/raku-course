---
title: Quiz — Definire valores praedefinitos
---

{% include menu.html %}

Quae functiones recte definitae sunt?

## 1

Functiones cum parametris positionalibus:

{:.quiz}
1 | sub p1($a = 3) {}
1 | sub p2($a, $b = 3) {}
0 | sub p4($a = 3, $b) {} | Omnes valores praedefiniti debent esse in fine indicis parametrorum.
1 | sub p3($a = 3, $b = 4) {}

## 2 

Functiones cum parametris nominatis:

{:.quiz}
1 | sub n1(:$a = 3) {}
1 | sub n2(:$a, :$b = 3) {}
1 | sub n4(:$a = 3, :$b) {} | Dissimile parametris positionalibus, ordo nominatarum non refert.
1 | sub n3(:$a = 3, :$b = 4) {}

{% include quiz.html %}

{% include nav.html %}