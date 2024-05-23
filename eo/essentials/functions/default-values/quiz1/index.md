---
title: Kvizo — Difini defaŭltajn valorojn
---

{% include menu.html %}

Kiuj funkcioj estas difinitaj ĝuste?

## 1

Funkcioj kun poziciaj parametroj:

{:.quiz}
1 | sub p1($a = 3) {}
1 | sub p2($a, $b = 3) {}
0 | sub p4($a = 3, $b) {} | Ĉiuj defaŭltaj valoroj devas esti ĉe la fino de la listo de parametroj.
1 | sub p3($a = 3, $b = 4) {}

## 2 

Funkcioj kun nomitaj parametroj:

{:.quiz}
1 | sub n1(:$a = 3) {}
1 | sub n2(:$a, :$b = 3) {}
1 | sub n4(:$a = 3, :$b) {} | Male al poziciaj parametroj, la ordo de nomitaj ne gravas.
1 | sub n3(:$a = 3, :$b = 4) {}

{% include quiz.html %}

{% include nav.html %}