---
title: Kvizo — Variablaj nomoj
---

{% include menu.html %}

Elektu la variablojn kiuj estas ĝuste nomitaj.

{:.quiz}
1 | $alpha
1 | $ALPHA
1 | $A-L-P-H-A
0 | $ a name | Vi ne povas havi spacojn en la nomo.
0 | $-a-name- | La nomo ne povas komenci aŭ fini per streketo.
1 | $FirstName
1 | $first_name
1 | first_name
1 | $last'name | Ununura citilo povas esti parto de nomo.
1 | $Βητα
1 | $Βήτα | Akcentitaj grekaj literoj ankaŭ estas akceptitaj!
0 | $33 | Nomo ne povas komenci per cifero.
1 | $AddressLine1
0 | $AddressLine-1 | Streketo devas esti sekvata de alfabeta karaktero.
0 | $2LineOfAddress | Nomo ne povas komenci per cifero.
0 | $)%^@!# | Tuta rubo :-)
0 | $"scalar" | Citilo ne estas nek litero nek cifero nek substreko.
1 | $number-of-items
1 | $numberofitems
1 | $numberOfItems
0 | $number<span>-</span>-of<span>-</span>-items | Du streketo unu post alia ne estas akceptitaj.
1 | $number__of__items

{% include quiz.html %}

{% include nav.html %}