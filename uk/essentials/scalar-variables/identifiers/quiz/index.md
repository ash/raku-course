---
title: Quiz — Імена змінних
---

{% include menu.html %}

Виберіть змінні, які названі правильно.

{:.quiz}
1 | $alpha
1 | $ALPHA
1 | $A-L-P-H-A
0 | $ a name | Ви не можете використовувати пробіли в імені.
0 | $-a-name- | Ім'я не може починатися або закінчуватися дефісом.
1 | $FirstName
1 | $first_name
1 | first_name
1 | $last'name | Одинарна лапка може бути частиною імені.
1 | $Βητα
1 | $Βήτα | Акцентовані грецькі літери також допустимі!
0 | $33 | Ім'я не може починатися з цифри.
1 | $AddressLine1
0 | $AddressLine-1 | Після дефісу повинна йти літера.
0 | $2LineOfAddress | Ім'я не може починатися з цифри.
0 | $)%^@!# | Повна нісенітниця :-)
0 | $"scalar" | Символ лапки не є ні літерою, ні цифрою, ні підкресленням.
1 | $number-of-items
1 | $numberofitems
1 | $numberOfItems
0 | $number<span>-</span>-of<span>-</span>-items | Два дефіси підряд не допускаються.
1 | $number__of__items

{% include quiz.html %}

{% include nav.html %}