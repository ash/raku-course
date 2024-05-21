---
title: Viktorīna — Noklusējuma vērtību definēšana
---

{% include menu.html %}

Kuras funkcijas ir definētas pareizi?

## 1

Funkcijas ar pozicionālajiem parametriem:

{:.quiz}
1 | sub p1($a = 3) {}
1 | sub p2($a, $b = 3) {}
0 | sub p4($a = 3, $b) {} | Visām noklusējuma vērtībām jābūt parametru saraksta beigās.
1 | sub p3($a = 3, $b = 4) {}

## 2 

Funkcijas ar nosauktajiem parametriem:

{:.quiz}
1 | sub n1(:$a = 3) {}
1 | sub n2(:$a, :$b = 3) {}
1 | sub n4(:$a = 3, :$b) {} | Atšķirībā no pozicionālajiem parametriem, nosaukto parametru kārtība nav svarīga.
1 | sub n3(:$a = 3, :$b = 4) {}

{% include quiz.html %}

{% include nav.html %}