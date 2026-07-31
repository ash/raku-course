---
title: start un await
translations_gpt:
---

{% include menu.html %}

Atslēgvārds `start` izpilda bloku fonā un tūlīt atgriež `Promise`:

```raku
my $p = start { 2 + 2 };
```

Darbs notiek Raku pavedienu baseinā, kamēr jūsu programma turpina savu gaitu. Lai iegūtu rezultātu, izmantojiet `await`, kas nogaida solījuma beigas un pasniedz jums tā vērtību:

```raku
my $p = start { 2 + 2 };
say await $p; # 4
```

`await` bloķē tieši tik ilgi, cik vajag solījuma pabeigšanai, un tad atgriež to, ko bloks radījis, — šeit `4`. Ja darbs līdz gaidīšanas brīdim jau ir padarīts, rezultātu saņemsiet uzreiz.

Šis pāris — `start` palaišanai, `await` savākšanai — ir uz solījumiem balstītas konkurences kodols. Jūs varat palaist vairākus darba gabalus, ļaut tiem izpildīties vienlaikus un sagaidīt to rezultātus tad, kad esat gatavi; tieši uz to būvē nākamais temats.

{% include nav.html %}
