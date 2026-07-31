---
title: 'Risinājums: Izveidojiet direktoriju'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Atrodiet programmu failā [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Izvade

```
True
True
```

## Komentāri

1. `mkdir` izveido direktoriju, un `.IO.d` apstiprina, ka `reports` ir direktorija.

1. Tā kā direktorija tagad eksistē, tajā var ierakstīt failu, norādot ceļu, kurā ietilpst direktorijas nosaukums, — `reports/data.txt`. Pārbaudot `.e` uz šī ceļa, tiek apstiprināts, ka fails jaunajā direktorijā ir izveidots.

1. Secībai ir nozīme: `spurt` **neizveido** trūkstošas direktorijas jūsu vietā. Rakstīšana `reports/data.txt`, pirms direktorija `reports` eksistē, neizdodas ar kļūdu, piemēram, `Failed to open file … : No such file or directory`. Direktorijas izveidošana vispirms — kā to šeit dara `mkdir` — ir tas, kas ļauj ierakstam izdoties. Ērti, ka `mkdir` izveido arī visas trūkstošās starpdirektorijas, tāpēc ligzdots ceļš, piemēram, `mkdir 'reports/2026'`, vienā izsaukumā uzbūvē visu ķēdi.

{% include nav.html %}
