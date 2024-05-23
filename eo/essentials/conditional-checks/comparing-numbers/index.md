---
title: Komparado de nombroj
---

{% include menu.html %}

Por kompari du nombrojn, uzu la jenajn operatorojn. Ĉiuj estas sufiĉe evidentaj se vi konas aliajn programlingvojn.

`==` | Egala
`!=` | Ne egala
`<` | Malpli ol
`<=` | Malpli ol aŭ egala
`>` | Pli granda ol
`>=` | Pli granda ol aŭ egala

## Proksimume-egala

Aldone al la normaj operatoroj, Raku aldonas la proksimume-egalan operatoron `=~=`, kiu komparas la nombrojn proksimume. Ĝia rezulto estas `True` se la du nombroj estas relative proksimaj unu al la alia. La maksimuma relativa diferenco ne devas superi la enkonstruan valoron `$*TOLERANCE`, kiu estas egala al `1e-15`.

## Unikodaj versioj

Kelkaj el la supraj operatoroj havas siajn Unikodajn ekvivalentojn:

`!=` | `≠`
`<=` | `≤` 
`>=` | `≥`
`=~=` | `≅`

## Ekzemploj

Kelkaj ekzemploj kun la operatoroj kiuj komparas nombrojn:

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

Notu ke la nombro `1.000000000000000000000001` estas `Rat` nombro, do vi ne perdas precizecon en esprimo kun proksima nombro `1.000000000000000000000002`. La lasta ekzemplo kun `2e17` operacias kun `Num` nombroj, kiuj havas limigitan precizecon.

{% include nav.html %}