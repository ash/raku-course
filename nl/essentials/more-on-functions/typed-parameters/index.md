---
title: Getypte parameters van functies
---

{% include menu.html %}

Functieparameters in Raku kunnen typebeperkingen hebben. Dit is zeer vergelijkbaar met [getypte variabelen](/nl/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

De functie vereist nu dat de argumenten gehele getallen zijn.

```raku
say add(10, 20);
# say add(pi, e); # Fout
```

Een poging om een parameter van een ander type dan `Int` door te geven, resulteert in een compile-tijd fout.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Merk op dat Raku niet automatisch types converteert, zelfs niet als dit in andere gevallen mogelijk is.

```raku
# say add('3', '4'); # Fout
say '3' + '4'; # OK en is 7
```

%%tipblock
## Hoe te herkennen of het een compile-tijd fout is
Als het foutbericht begint met `===SORRY!=== Error while compiling`, betekent dit dat de fout op compile-tijd is opgetreden.
%%/tipblock

{% include nav.html %}