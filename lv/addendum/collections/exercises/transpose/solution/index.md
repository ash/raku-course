---
title: 'Risinājums: Transponējiet matricu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my @matrix = [1, 2, 3], [4, 5, 6];

say [Z] @matrix;
```

🦋 Atrodiet programmu failā [transpose.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/collections/transpose.raku).

## Izvade

```
((1 4) (2 5) (3 6))
```

## Komentāri

1. Rāvējslēdzēja metaoperators `Z` savieno elementus pēc pozīcijas. Lietots kā
redukcija `[Z]`, tas savelk kopā visas rindas, pārvēršot kolonnas par rindām, —
tieši transponēšana.

{% include nav.html %}
