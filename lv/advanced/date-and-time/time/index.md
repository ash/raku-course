---
title: Darbs ar laiku
translations_gpt:
---

{% include menu.html %}

Kad līdz ar datumu nepieciešams arī diennakts laiks, izmantojiet tipu `DateTime`. To izveido gluži tāpat kā `Date`, tikai norādot arī stundu, minūti un sekundi:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt; # 2026-06-27T14:30:00Z
```

Noklusētā teksta forma seko ISO 8601 standartam: datums, burts `T`, laiks un beigās `Z` par UTC laika joslu.

`DateTime` dod piekļuvi laika daļām papildus jau zināmajām datuma daļām:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt.hour;   # 14
say $dt.minute; # 30
```

Lai iegūtu pašreizējo brīdi, izsauciet `DateTime.now`. Tāpat kā `Date.today` gadījumā, tā izvadi nerādām, jo tā mainās katrā programmas palaišanas reizē.

{% include nav.html %}
