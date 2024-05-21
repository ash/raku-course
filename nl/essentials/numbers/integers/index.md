---
title: Gehele getallen in Raku
---

{% include menu.html %}

Het `Int` gegevenstype vertegenwoordigt gehele getallen. Getallen kunnen positief en negatief zijn, en je kunt een expliciet `+` teken gebruiken als je dat wilt. Hier zijn een paar voor de hand liggende voorbeelden:

```raku
42
-42
100
-5
0
```

Ja, een kale `0` wordt standaard als een geheel getal beschouwd.

## Groepen van cijfers

Raku heeft een leuke functie waarmee je grote getallen kunt spellen met enkele visuele hulpmiddelen die de cijfers in groepen van duizenden splitsen:

```raku
1_000_000
-3_141_592
```

Hoewel je een getal zoals `34_56` kunt construeren, kun je dit beter vermijden omdat dit andere mensen die je code lezen kan verwarren. Maar je kunt geen twee opeenvolgende underscores hebben, noch kun je het getal ermee beginnen of eindigen.

## Willekeurig lange gehele getallen

Raku kan perfect omgaan met getallen die de 32- of 64-bits limieten overschrijden. Bijvoorbeeld, het volgende programma is een acceptabel programma dat twee grote gehele getallen vermenigvuldigt en het correcte resultaat afdrukt.

```raku
say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;
```

{% include nav.html %}