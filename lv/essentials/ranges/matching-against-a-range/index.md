---
title: Saskaņošana ar diapazonu
---

{% include menu.html %}

Paņemiet diapazonu un mainīgo ar tajā esošu veselu skaitli:

```raku
my $r = 1..10;
my $v = 7;
```

Izmantojot _gudrās saskaņošanas operatoru_ `~~`, jūs varat pārbaudīt, vai vērtība ir diapazonā:

```
say $v ~~ $r;
```

Parādītajā piemērā nosacījums ir `True`, tāpēc programma izdrukā `True`.

{% include nav.html %}