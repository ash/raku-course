---
title: Quiz — Variable names
---

{% include menu.html %}

Select the variables which are named correctly.

{:.quiz}
1 | $alpha
1 | $ALPHA
1 | $A-L-P-H-A
0 | $ a name | You cannot have spaces in the name.
0 | $-a-name- | The name cannot start or end with a hyphen.
1 | $FirstName
1 | $first_name
1 | first_name
1 | $last'name | A single quote can be a part of a name.
1 | $Βητα
1 | $Βήτα | Accented Greek letters are also fine!
0 | $33 | A name cannot start with a digit.
1 | $AddressLine1
0 | $AddressLine-1 | A dash must be followed by an alphabetic character.
0 | $2LineOfAddress | A name cannot start with a digit.
0 | $)%^@!# | Total rubbish :-)
0 | $"scalar" | A quote character is neither letter nor digit nor underscore.
1 | $number-of-items
1 | $numberofitems
1 | $numberOfItems
0 | $number<span>-</span>-of<span>-</span>-items | Two hyphes one after another are not OK.
1 | $number__of__items

{% include quiz.html %}

{% include nav.html %}
