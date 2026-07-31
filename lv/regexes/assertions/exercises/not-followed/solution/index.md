---
title: 'Risinājums: Kam neseko'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
say so '50 dollars' ~~ / \d+ >> <!before '%'> /;
```

🦋 Atrodiet programmu failā [not-followed.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/not-followed.raku).

## Izvade

```
True
```

## Komentāri

1. `<!before '%'>` ir negatīva lūkošanās uz priekšu: tā izdodas tikai tad, kad teksts tūlīt aiz skaitļa **nav** `%`.

1. `>>` ir vārda robeža, kas iezīmē skaitļa **beigas**, un šeit tai ir nozīme. Bez tās rijīgais `\d+` atkāptos: virknē `50% off` tas atdotu `0` un sakritinātu tikai `5` — kam `%` *neseko* —, tāpēc raksturs kļūdaini izdotos. `>>` piespiež `\d+` paņemt visu skaitli, tāpēc lūkošanās uz priekšu tiek pārbaudīta īstajās beigās. Rezultātā `50 dollars` dod `True`, bet `50% off` pareizi dod `False`.

{% include nav.html %}
