---
title: 'Risinājums: Kur ir cipars'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $m = 'abc9x2z' ~~ /\d/;
say $m.from;
say $m.to;
```

🦋 Atrodiet programmu failā [where-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/matching/where-digit.raku).

## Izvade

```
3
4
```

## Komentāri

1. Klase `\d` piemeklē vienu ciparu. Dzinējs apstājas pie **pirmā**, ko atrod, — `9`, indeksā `3` (pozīcijas skaita no nulles); vēlākais `2` netiek sasniegts nemaz.

1. `.from` dod sakritības sākumu `3`, bet `.to` — pozīciju tūlīt aiz tās beigām `4`. Starpība `.to - .from` ir sakritības garums — šeit viena rakstzīme.

{% include nav.html %}
