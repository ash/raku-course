---
title: Datumu aritmētika
translations_gpt:
---

{% include menu.html %}

Datumi atbalsta aritmētiku, kas daudzus ikdienišķus aprēķinus padara vienkāršus.

Pieskaitot datumam veselu skaitli, tas tiek pavirzīts uz priekšu par tik dienām. Rezultāts ir jauns datums, kuram mēnesis un gads pielāgoti automātiski:

```raku
say Date.new(2026, 6, 27) + 7; # 2026-07-04
```

Atņemot vienu datumu no otra, tiek iegūts dienu skaits starp tiem:

```raku
say Date.new(2026, 7, 4) - Date.new(2026, 6, 27); # 7
```

Lielākiem soļiem metodes `later` un `earlier` pieņem nosauktus argumentus, piemēram, `:days`, `:months` vai `:years`:

```raku
say Date.new(2026, 6, 27).later(:days(10));    # 2026-07-07
say Date.new(2026, 6, 27).earlier(:months(2)); # 2026-04-27
```

Šīs metodes uztur aritmētiku pareizu pāri mēnešu un gadu robežām, tāpēc nekad nav jāraizējas par to, cik dienu ir konkrētajā mēnesī.

{% include nav.html %}
