---
title: 'Risinājums: Otrā lielākā vērtība'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @numbers = 3, 9, 4, 9, 1, 7;

my @distinct = @numbers.Set.keys.sort;

say @distinct[*-2];
```

🦋 Atrodiet programmu failā [second-largest.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/second-largest.raku).

## Izvade

```
7
```

## Komentāri

1. Pārvēršot sarakstu par `Set` ar `.Set`, dublētais `9` tiek izmests, jo kopa katru
vērtību tur tikai vienreiz.

1. `.keys` atdod atšķirīgās vērtības — joprojām kā `Int`, nevis virknes —, tāpēc
vienkāršs `.sort` tās sakārto skaitliski. Otrā lielākā tad ir vienu vietu pirms
beigām, `[*-2]`.

{% include nav.html %}
