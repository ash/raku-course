---
title: Tajpitaj parametroj de funkcioj
---

{% include menu.html %}

Parametroj de funkcioj en Raku povas esti tajpe restriktitaj. Ĉi tio estas tre simila al [tajpitaj variabloj](/eo/essentials/typed-variables/type-constraints/).

```raku
sub add(Int $x, Int $y) { $x + $y }
```

La funkcio nun postulas, ke ĝiaj argumentoj estu entjeraj nombroj.

```raku
say add(10, 20);
# say add(pi, e); # Eraro
```

Provo pasi parametron de iu ajn alia tipo ol `Int` estas kompila-tempa eraro.

```
$ raku t.raku
===SORRY!=== Error while compiling t.raku
Calling add(Num, Num) will never work with declared signature (Int $x, Int $y)
at t.raku:5
------> say ⏏add(pi, e);
```

Notu, ke Raku ne aŭtomate konvertos tipojn eĉ se tio estas ebla en aliaj kazoj.

```raku
# say add('3', '4'); # Eraro
say '3' + '4'; # BONE kaj estas 7
```

%%tipblock
## Kiel diri ĉu ĝi estas kompila-tempa eraro
Se la erarmesaĝo komenciĝas per `===SORRY!=== Error while compiling`, tio signifas, ke la eraro okazis dum kompila tempo.
%%/tipblock

{% include nav.html %}