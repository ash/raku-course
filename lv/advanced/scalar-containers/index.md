---
title: Skalārie konteineri
---

{% include menu.html %}

Kā norāda nosaukums, skalārie konteineri glabā atsevišķas (skalāras) vērtības. Šādus konteinerus apzīmē ar sigilu `$`.

Šeit ir viens no vienkāršākajiem un tiešākajiem skalāra lietošanas veidiem:

```raku
my $lang = 'Raku';
```

Mainīgais `$lang` ir skalārs konteineris.

Pēc noklusējuma skalārie konteineri neuzliek tipu datiem, tāpēc tajos var glabāt jebkura tipa vērtību. Vienkāršākais to demonstrējums ir tāds, ka varat izmantot vienu un to pašu mainīgo, lai vispirms saglabātu veselu skaitli, bet pēc tam virkni:

```raku
my $value = 42;
$value = 'forty-two';
```

(Autors neaicina jūs programmēt šādā veidā.)

Iekšēji tas nozīmē, ka pēc noklusējuma jauns konteineris var glabāt `Any` tipa vērtības. `Any` ir bāzes tips lielākajai daļai citu tipu, piemēram, `Int` vai `Str`.

{% include nav.html %}
