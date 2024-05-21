---
title: Quiz — Het definiëren van standaardwaarden
---

{% include menu.html %}

Welke functies zijn correct gedefinieerd?

## 1

Functies met positionele parameters:

{:.quiz}
1 | sub p1($a = 3) {}
1 | sub p2($a, $b = 3) {}
0 | sub p4($a = 3, $b) {} | Alle standaardwaarden moeten aan het einde van de lijst met parameters staan.
1 | sub p3($a = 3, $b = 4) {}

## 2 

Functies met benoemde parameters:

{:.quiz}
1 | sub n1(:$a = 3) {}
1 | sub n2(:$a, :$b = 3) {}
1 | sub n4(:$a = 3, :$b) {} | In tegenstelling tot positionele parameters maakt de volgorde van benoemde parameters niet uit.
1 | sub n3(:$a = 3, :$b = 4) {}

{% include quiz.html %}

{% include nav.html %}