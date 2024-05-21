---
title: 'Quiz 1: Strings en getallen samenvoegen'
---

{% include menu.html %}

Raku converteert automatisch een getal als je het wilt samenvoegen met een string. Selecteer in elk van de onderstaande delen de regels die de vereiste string afdrukken.

## 1

Welke van de regels print `Alpha2`?

{:.quiz}
1 | say &apos;Alpha2&apos;;
0 | say &apos;Alpha&apos; 2; | Een spatie is hier een syntaxisfout.
1 | say &apos;Alpha&apos;, &apos;2&apos;; | Er is geen stringconcatenatie, maar het resultaat is correct.
1 | say &apos;Alpha&apos; ~ &apos;2&apos;;
1 | say &apos;Alpha&apos; ~ 2; | Een getal wordt omgezet in een string en vervolgens samengevoegd.
0 | say &apos;Alpha&apos; + 2; | Een `+` doet geen stringconcatenatie.
0 | say &apos;Alpha&apos; . 2; | Evenmin doet een `.` dat.

## 2

Welke van deze regels print `123`?

{:.quiz}
1 | say 1 ~ 2 ~ 3; | Stringconcatenatie hier, zelfs voor getallen.
0 | say 1 + 2 + 3; | Een reguliere rekenkundige uitdrukking.
1 | say &apos;1&apos; ~ &apos;2&apos; ~ &apos;3&apos;; | Enkele tekens zijn ook strings.
0 | say &apos;1&apos; + &apos;2&apos; + &apos;3&apos;; | Aangezien er een `+` is, worden de strings omgezet in getallen.
1 | say 1 ~ 23;
1 | say 12 ~ 3;
1 | say 123 ~ &apos;&apos;; | `''` is een lege string, dus het toevoegen ervan verandert het resultaat niet.

{% include quiz.html %}

{% include nav.html %}