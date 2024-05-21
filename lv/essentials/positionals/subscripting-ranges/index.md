---
title: Apakšindeksēšanas diapazoni
---

{% include menu.html %}

`Diapazons` ir pozicionāls datu tips. Tāpat kā ar masīviem, jūs varat piekļūt tā atsevišķiem elementiem.

Piemēram, šādi jūs varat izdrukāt trešo elementu secībā, ko ģenerē diapazons:

```raku
my $r = 10..20;
say $r[3]; # 13
```

Ir svarīgi saprast, ka diapazoni, atšķirībā no masīviem, ne vienmēr saglabā visas vērtības atmiņā.

## Izmērs

Lai iegūtu diapazona izmēru, izmantojiet `elems` metodi tāpat kā ar masīviem.

```raku
my $r = 10..20;
say $r.elems; # 11
```

{% include nav.html %}