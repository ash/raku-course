---
title: 'Risinājums: Saskaitīt unikālos'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @data = 3, 1, 4, 1, 5, 9, 2, 6, 5, 3;

say set(@data).elems;
```

🦋 Atrodiet programmu failā [count-the-distinct.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sets-bags-mixes/count-the-distinct.raku).

## Izvade

```
7
```

## Komentāri

1. Padodot masīvu `set`, tiek uzbūvēta kopa no tā vērtībām. Tā kā kopa patur tikai atšķirīgas vērtības, atkārtotie skaitļi saplūst vienā.

1. Metode `elems` tad atgriež atšķirīgo vērtību skaitu, kas ir `7`.

{% include nav.html %}
