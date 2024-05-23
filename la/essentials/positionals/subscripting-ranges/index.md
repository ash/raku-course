---
title: Subscripting ranges
---

{% include menu.html %}

`Range` est data typus positionis. Ut cum arrayibus, eius singulos elementa accedere potes.

Exempli gratia, hoc modo tertium elementum in serie rerum quas range generat imprimes:

```raku
my $r = 10..20;
say $r[3]; # 13
```

Magni momenti est intellegere quod ranges, dissimile arrayibus, non necessario omnes valores in memoria retinent.

## Magnitudo

Ut magnitudinem range obtineas, utere methodo `elems` sicut cum arrayibus facis.

```raku
my $r = 10..20;
say $r.elems; # 11
```

{% include nav.html %}