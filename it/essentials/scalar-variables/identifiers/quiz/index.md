---
title: Quiz — Nomi di variabili
---

{% include menu.html %}

Seleziona le variabili che sono nominate correttamente.

{:.quiz}
1 | $alpha
1 | $ALPHA
1 | $A-L-P-H-A
0 | $ a name | Non puoi avere spazi nel nome.
0 | $-a-name- | Il nome non può iniziare o terminare con un trattino.
1 | $FirstName
1 | $first_name
1 | first_name
1 | $last'name | Un apostrofo può far parte di un nome.
1 | $Βητα
1 | $Βήτα | Anche le lettere greche accentate vanno bene!
0 | $33 | Un nome non può iniziare con una cifra.
1 | $AddressLine1
0 | $AddressLine-1 | Un trattino deve essere seguito da un carattere alfabetico.
0 | $2LineOfAddress | Un nome non può iniziare con una cifra.
0 | $)%^@!# | Totalmente spazzatura :-)
0 | $"scalar" | Un carattere di virgoletta non è né lettera né cifra né underscore.
1 | $number-of-items
1 | $numberofitems
1 | $numberOfItems
0 | $number<span>-</span>-of<span>-</span>-items | Due trattini uno dopo l'altro non vanno bene.
1 | $number__of__items

{% include quiz.html %}

{% include nav.html %}