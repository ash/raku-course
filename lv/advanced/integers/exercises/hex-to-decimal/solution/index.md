---
title: 'Risinājums: Heksadecimālais uz decimālo'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $n = :16<1A>;

say $n;
say $n.base(16);
```

🦋 Programmas pirmkodu var atrast failā [hex-to-decimal.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/integers/hex-to-decimal.raku).

## Izvade

```
26
1A
```

## Komentāri

1. Radiksa forma `:16<1A>` nolasa `1A` kā 16. bāzes skaitli, kas ir vienāds ar `1 × 16 + 10 = 26`. Mainīgais `$n` tagad satur parasto veselo skaitli.

1. `$n.base(16)` pārvērš šo veselo skaitli atpakaļ par 16. bāzes virkni, iegūstot atkal `1A` — apstiprinot, ka bāzes nolasīšana un drukāšana bāzē ir inversas operācijas.

{% include nav.html %}
