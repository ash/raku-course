---
title: Somas un maisījumi
translations_gpt:
---

{% include menu.html %}

Kopa atceras tikai to, _vai_ vērtība ir klāt. Reizēm vēlaties zināt arī, _cik reižu_ tā sastopama. Tieši tam domāts `Bag`: tas katrai vērtībai uztur skaitu.

Maisu izveido ar rutīnu `bag`. Atkārtotas vērtības netiek sapludinātas — tās tiek saskaitītas:

```raku
my $b = bag(<a b a c a>);
say $b<a>; # 3
say $b<b>; # 1
```

Prasot maisam vērtību ar indeksu `< >`, tiek atgriezts, cik reižu šī vērtība tajā ielikta. Metode `total` dod visu skaitu summu:

```raku
say bag(<a b a c a>).total; # 5
```

`Mix` ir tā pati doma, kas maiss, tikai skaiti (saukti par _svariem_) drīkst būt daļskaitļi, nevis veseli skaitļi. Lai piešķirtu skaidri norādītus svarus, savienojiet katru vērtību ar tās svaru un pārveidojiet sarakstu ar `.Mix`:

```raku
my $m = (flour => 2.5, sugar => 0.75).Mix;
say $m<flour>; # 2.5
say $m.total;  # 3.25
```

Svara meklēšana ar `< >` un to summēšana ar `total` darbojas tieši tāpat kā maisam — tikai skaitļiem nav jābūt veseliem. Šeit `total` saskaita svarus `2.5` un `0.75`, dodot `3.25` — tā ir svaru summa, nevis vērtību skaits. Maisi un maisījumi ir noderīgi ikreiz, kad jāseko līdzi daudzumiem — piemēram, skaitot, cik bieži tekstā parādās katrs vārds, vai piešķirot svarus izvēles variantiem.

{% include nav.html %}
