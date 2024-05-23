---
title: Type constraints
---

{% include menu.html %}

Raku estas lingvo kun la tiel nomata grada tipa sistemo. En plej multaj kazoj, vi ne bezonas zorgi pri specifado de la tipo de la variablo. Tamen, en iuj kazoj, vi eble volas limigi la tipon por la donita variablo, kaj vi povas fari tion specifante la tipon kiel montrite sube:

```raku
my Int $var = 42;
```

Nun, eblas asigni alian entjeran valoron al `$var`, sed provo meti ĉenon aŭ eĉ nombron kun flosanta punkto finiĝas per escepto:

```raku
my Int $var = 42;
$var = '314E-2';
```

Ĉi tiu programo elsendas la sekvan eraron:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

{% include nav.html %}