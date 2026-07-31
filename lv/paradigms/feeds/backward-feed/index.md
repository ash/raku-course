---
title: Atpakaļvērstā plūsma
translations_gpt:
---

{% include menu.html %}

Visas līdzšinējās plūsmas tecēja uz priekšu ar `==>` — no avota kreisajā pusē uz mērķi labajā. Raku ir arī spoguļoperators `<==`, **atpakaļvērstā plūsma**. Tā darbojas pretējā virzienā: mērķis atrodas **kreisajā** pusē, un dati tiek vilkti iekšā no avota **labajā** pusē.

Šeit ir iepriekšējais pāra skaitļu konveijers, uzrakstīts atpakaļvērsti:

```raku
my @evens <== grep(* %% 2) <== (1..10);
say @evens; # [2 4 6 8 10]
```

Lasiet to no labās uz kreiso: paņem `1..10`, paturi pāra skaitļus un savāc tos `@evens`. Rezultāts ir tieši tāds pats kā `(1..10) ==> grep(* %% 2) ==> my @evens` — mainījies ir tikai virziens, kādā posmus rakstāt.

Atpakaļvērstās plūsmas ķēdējas tāpat, un arī šeit priekšgalā ir mērķis:

```raku
my @result <== map(* ** 2) <== grep(* %% 2) <== (1..10);
say @result; # [4 16 36 64 100]
```

Darbs joprojām notiek, sākot ar avotu — sāc ar `1..10`, paturi pāra skaitļus, kāpini tos kvadrātā —, bet uz lappuses posmi ir uzskaitīti no galamērķa atpakaļ uz izcelsmi. Elementu secība netiek aizskarta; `<==` maina tikai lasīšanas virzienu, nekad ne datus.

Tā kā kodu parasti lasa no kreisās uz labo, priekšupvērstā `==>` mēdz lasīties dabiskāk: jūs vispirms satiekat datus un sekojat tiem līdz vietai, kur tie nonāk. Atpakaļvērstā `<==` ir tiem gadījumiem, kad stāstu labāk pastāsta galamērķis priekšgalā — nosaucot *to, ko būvējat*, pirms *tā, no kā tas ir uzbūvēts*. Abas ir precīzi spoguļattēli, tāpēc izvēlieties to virzienu, kas lasās labāk.

{% include nav.html %}
