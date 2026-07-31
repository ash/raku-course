---
title: 'Risinājums: Pēc vienas nedēļas'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $later = Date.new(2027, 2, 28).later(:days(7));
say $later;
say $later.day-of-week;
```

🦋 Atrodiet programmu failā [one-week-later.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/date-and-time/one-week-later.raku).

## Izvade

```
2027-03-07
7
```

## Komentāri

1. `later(:days(7))` pavirza datumu uz priekšu par septiņām dienām — vienu nedēļu. Varējām rakstīt arī `+ 7`, taču nosauktais arguments vienību pasaka skaidri.

1. 2027. gada februārim ir 28 dienas, tāpēc nedēļa pēc 28. datuma automātiski pārrit martā: rezultāts ir `2027-03-07`.

1. Izsaucot jaunajam datumam `day-of-week`, iegūstam `7`. Tas padara rezultātu viegli pārbaudāmu: datumam tieši nedēļu vēlāk jāiekrīt *tajā pašā* nedēļas dienā, un arī `2027-02-28` ir svētdiena (`7`) — tāpēc `7` šeit ir tieši tā atbilde, kādu gaidāt.

{% include nav.html %}
