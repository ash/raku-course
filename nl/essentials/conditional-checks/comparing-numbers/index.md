---
title: Getallen vergelijken
---

{% include menu.html %}

Om twee getallen te vergelijken, gebruik je de volgende operatoren. Ze zijn allemaal vrij duidelijk als je bekend bent met andere programmeertalen.

`==` | Gelijk
`!=` | Niet gelijk
`<` | Minder dan
`<=` | Minder dan of gelijk aan
`>` | Groter dan
`>=` | Groter dan of gelijk aan

## Ongeveer-gelijk

Naast standaardoperatoren voegt Raku de ongeveer-gelijk operator `=~=` toe, die de getallen ongeveer vergelijkt. Het resultaat is `True` als de twee getallen relatief dicht bij elkaar liggen. Het maximale relatieve verschil mag de ingebouwde waarde `$*TOLERANCE`, die gelijk is aan `1e-15`, niet overschrijden.

## Unicode-versies

Sommige van de bovenstaande operatoren hebben hun Unicode-equivalenten:

`!=` | `≠`
`<=` | `≤` 
`>=` | `≥`
`=~=` | `≅`

## Voorbeelden

Enkele voorbeelden met de operatoren die getallen vergelijken:

```raku
say 10 == 10; # True
say 10 != 10; # False

say 15 < 10;  # False
say 10 <= 10; # True
say 16 > 10;  # True
say 10 >= 14; # False

say 1.000000000000000000000001 =~= 1.000000000000000000000002; # True
say 2e17 + 1 =~= 2e17 + 100; # True
```

Merk op dat het getal `1.000000000000000000000001` een `Rat`-getal is, dus je verliest geen precisie in een uitdrukking met een nabijgelegen getal `1.000000000000000000000002`. Het laatste voorbeeld met `2e17` werkt met `Num`-getallen, die beperkte precisie hebben.

{% include nav.html %}