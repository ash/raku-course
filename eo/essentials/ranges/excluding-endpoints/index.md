---
title: Ekskludi la limojn de intervalo
---

{% include menu.html %}

Por ekskludi unu el la randoj aŭ ambaŭ, modifu la intervalan krean operatoron per la `^` karaktero. Estas tri pliaj operatoroj, kiuj povas esti konstruitaj tiel. La komentoj listigas la nombrojn, kiujn la intervaloj generas.

```raku
1 ..^ 5;  # 1, 2, 3, 4
1 ^.. 5;  #    2, 3, 4, 5
1 ^..^ 5; #    2, 3, 4
```

En simplaj kazoj kiel montrite supre, vi povas preterlasi la spacojn ĉirkaŭ la intervala operatoro:

```raku
my $r1 = 1..5;
my $r2 = 1..^5;
```

Por intervalo, kiu komenciĝas per 0, kiel `0..^5`, ekzistas mallongiga sintakso: `^5`.

{% include nav.html %}