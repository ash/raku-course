---
title: 'Risinājums: Mēģinājums vai noklusētā vērtība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $r = try { die 'no' } // 'default';

say $r;
```

🦋 Atrodiet programmu failā [try-or-default.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/try-or-default.raku).

## Izvade

```
default
```

## Komentāri

1. Neizdevies `try` bloks izrēķinās par nedefinētu vērtību.

1. Tāpēc defined-or operators `//` atgriež savu labās puses operandu `'default'`, dodot tīru veidu, kā vienā rindā atkāpties uz rezerves vērtību.

{% include nav.html %}
