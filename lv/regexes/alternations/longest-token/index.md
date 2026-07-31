---
title: Garākais marķieris un pirmā sakritība
translations_gpt:
---

{% include menu.html %}

Kad divas alternatīvas vienā un tajā pašā vietā abas varētu sakrist, operators `|` izvēlas to, kas sakrīt ar **garāko** teksta gabalu. To sauc par _garākā marķiera piemeklēšanu_:

```raku
say 'catdog' ~~ / cat | catdog /; # ｢catdog｣
```

Lai gan `cat` ir uzrakstīts pirmais un sakristu, `|` dod priekšroku garākajam `catdog`.

Dažreiz vēlaties pretējo — izmēģināt alternatīvas tādā secībā, kādā tās uzrakstījāt, un paņemt **pirmo**, kas sakrīt. Tieši to dara dubultā svītra `||`:

```raku
say 'catdog' ~~ / cat || catdog /; # ｢cat｣
```

Tagad vispirms tiek izmēģināts `cat` un tas sakrīt, tāpēc dzinējs tur apstājas un `catdog` vispār neapsver.

Izmantojiet `|` (garāko marķieri), kad vēlaties «labāko» sakritību neatkarīgi no secības — tā ir ierastā izvēle un tā, uz kuru paļaujas gramatikas. Izmantojiet `||` (pirmo sakritību), kad alternatīvu secība ir jēgpilna un vēlaties, lai uzvarētu agrākās.

{% include nav.html %}
