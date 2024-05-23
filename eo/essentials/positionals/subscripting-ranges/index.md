---
title: Subscripting ranges
---

{% include menu.html %}

`Range` estas pozicia datumtipo. Kiel ĉe tabeloj, vi povas aliri ĝiajn individuajn elementojn.

Ekzemple, jen kiel vi presas la trian elementon en la sekvenco de eroj, kiujn la intervalo generas:

```raku
my $r = 10..20;
say $r[3]; # 13
```

Gravas rimarki, ke intervaloj, male al tabeloj, ne nepre konservas ĉiujn valorojn en memoro.

## Grandeco

Por akiri la grandecon de la intervalo, uzu la metodon `elems` kiel vi faras kun tabeloj.

```raku
my $r = 10..20;
say $r.elems; # 11
```

{% include nav.html %}