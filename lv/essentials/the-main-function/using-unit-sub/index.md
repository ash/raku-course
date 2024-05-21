---
title: Izmantojot unit sub
---

{% include menu.html %}

`unit sub` konstrukcija ir ērts veids, kā padarīt pārējo failu par funkcijas ķermeni! Lietojot kopā ar `MAIN`, tā ļauj atbrīvoties no figūriekavām, kas aptver gandrīz visu failu, kā arī no nevajadzīgas atkāpes.

`unit sub` izmantošana ir parādīta šādā programmas piemērā.

```raku
unit sub MAIN($a, $b);

my $sum = $a + $b;
say "Summa no $a un $b ir $sum.";
```

`MAIN` funkcija ir vienīgā funkcija šajā failā. Ja tas ir arī jūsu programmas gadījumā, apsveriet iespēju izmantot `unit sub MAIN`, kā parādīts iepriekš.

{% include nav.html %}