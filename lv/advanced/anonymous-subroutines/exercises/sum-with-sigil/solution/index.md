---
title: 'Risinājums: Summa ar `&` sigilu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my &add = -> $a, $b {
    $a + $b;
};

say add(2, 3);
```

🦋 Atrodiet programmu failā [sum-with-sigil.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/anonymous-subroutines/sum-with-sigil.raku).

## Izvade

```
5
```

## Komentāri

1. Bultiņas bloks uzskaita divus parametrus, `-> $a, $b`, tāpēc anonīmā apakšprogramma ņem divus argumentus.

1. Tā kā mainīgais deklarēts ar sigilu `&`, to var izsaukt kā `add(2, 3)` tieši tāpat kā nosauktu apakšprogrammu — izsaukuma vietā bez sigila —, dodot `5`.

{% include nav.html %}
