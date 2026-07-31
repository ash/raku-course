---
title: 'Risinājums: Tieši viens'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say so one(1, 2, 3) == 2;
```

🦋 Atrodiet programmu failā [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Izvade

```
True
```

## Komentāri

1. `one` savienojums ir patiess tikai tad, kad salīdzinājumam atbilst **tieši viena** vērtība.

1. Tieši viens no `1, 2, 3` ir vienāds ar `2`, tāpēc rezultāts ir `True`. Ja atbilstu divi (vai neviens), iznāktu `False`. `so` savienojumu pārvērš vienkāršā Būla vērtībā.

{% include nav.html %}
