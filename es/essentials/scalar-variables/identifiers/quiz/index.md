---
title: Quiz — Nombres de variables
---

{% include menu.html %}

Selecciona las variables que están nombradas correctamente.

{:.quiz}
1 | $alpha
1 | $ALPHA
1 | $A-L-P-H-A
0 | $ a name | No puedes tener espacios en el nombre.
0 | $-a-name- | El nombre no puede comenzar ni terminar con un guion.
1 | $FirstName
1 | $first_name
1 | first_name
1 | $last'name | Una comilla simple puede ser parte de un nombre.
1 | $Βητα
1 | $Βήτα | ¡Las letras griegas acentuadas también están bien!
0 | $33 | Un nombre no puede comenzar con un dígito.
1 | $AddressLine1
0 | $AddressLine-1 | Un guion debe ser seguido por un carácter alfabético.
0 | $2LineOfAddress | Un nombre no puede comenzar con un dígito.
0 | $)%^@!# | Basura total :-)
0 | $"scalar" | Un carácter de comillas no es ni letra, ni dígito, ni guion bajo.
1 | $number-of-items
1 | $numberofitems
1 | $numberOfItems
0 | $number<span>-</span>-of<span>-</span>-items | Dos guiones uno tras otro no están permitidos.
1 | $number__of__items

{% include quiz.html %}

{% include nav.html %}