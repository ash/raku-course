---
title: Quiz — Variablennamen
---

{% include menu.html %}

Wählen Sie die Variablen aus, die korrekt benannt sind.

{:.quiz}
1 | $alpha
1 | $ALPHA
1 | $A-L-P-H-A
0 | $ a name | Sie können keine Leerzeichen im Namen haben.
0 | $-a-name- | Der Name darf nicht mit einem Bindestrich beginnen oder enden.
1 | $FirstName
1 | $first_name
1 | first_name
1 | $last'name | Ein einfaches Anführungszeichen kann Teil eines Namens sein.
1 | $Βητα
1 | $Βήτα | Akzentuierte griechische Buchstaben sind auch in Ordnung!
0 | $33 | Ein Name darf nicht mit einer Ziffer beginnen.
1 | $AddressLine1
0 | $AddressLine-1 | Ein Bindestrich muss von einem Buchstaben gefolgt werden.
0 | $2LineOfAddress | Ein Name darf nicht mit einer Ziffer beginnen.
0 | $)%^@!# | Totaler Unsinn :-)
0 | $"scalar" | Ein Anführungszeichen ist weder Buchstabe noch Ziffer noch Unterstrich.
1 | $number-of-items
1 | $numberofitems
1 | $numberOfItems
0 | $number<span>-</span>-of<span>-</span>-items | Zwei Bindestriche hintereinander sind nicht in Ordnung.
1 | $number__of__items

{% include quiz.html %}

{% include nav.html %}