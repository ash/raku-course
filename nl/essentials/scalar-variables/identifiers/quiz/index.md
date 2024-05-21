---
title: Quiz — Variabelnamen
---

{% include menu.html %}

Selecteer de variabelen die correct zijn benoemd.

{:.quiz}
1 | $alpha
1 | $ALPHA
1 | $A-L-P-H-A
0 | $ a name | Je kunt geen spaties in de naam hebben.
0 | $-a-name- | De naam mag niet beginnen of eindigen met een koppelteken.
1 | $FirstName
1 | $first_name
1 | first_name
1 | $last'name | Een enkele aanhalingstekens kan deel uitmaken van een naam.
1 | $Βητα
1 | $Βήτα | Geaccentueerde Griekse letters zijn ook goed!
0 | $33 | Een naam mag niet beginnen met een cijfer.
1 | $AddressLine1
0 | $AddressLine-1 | Een koppelteken moet gevolgd worden door een alfabetisch teken.
0 | $2LineOfAddress | Een naam mag niet beginnen met een cijfer.
0 | $)%^@!# | Totale onzin :-)
0 | $"scalar" | Een aanhalingsteken is noch een letter, noch een cijfer, noch een onderstrepingsteken.
1 | $number-of-items
1 | $numberofitems
1 | $numberOfItems
0 | $number<span>-</span>-of<span>-</span>-items | Twee koppeltekens achter elkaar zijn niet toegestaan.
1 | $number__of__items

{% include quiz.html %}

{% include nav.html %}