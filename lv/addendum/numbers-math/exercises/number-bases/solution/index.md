---
title: 'Risinājums: Viens skaitlis trīs bāzēs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $n = 255;

say $n.base(2);
say $n.base(8);
say $n.base(16);
```

🦋 Atrodiet programmu failā [number-bases.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/numbers-math/number-bases.raku).

## Izvade

```
11111111
377
FF
```

## Komentāri

1. Metode `.base` veselu skaitli atveido jebkurā bāzē no 2 līdz 36, atgriežot
virkni. `255` binārā pierakstā ir `11111111` un heksadecimālā — `FF`, lielākā
vērtība, kas ietilpst vienā baitā.

{% include nav.html %}
