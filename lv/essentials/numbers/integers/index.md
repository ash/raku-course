---
title: Veseli skaitļi Raku
---

{% include menu.html %}

`Int` datu tips pārstāv veselos skaitļus. Skaitļi var būt pozitīvi un negatīvi, un, ja vēlaties, varat izmantot skaidru `+` zīmi. Šeit ir daži acīmredzami piemēri:

```raku
42
-42
100
-5
0
```

Jā, tukšs `0` pēc noklusējuma tiek uzskatīts par veselu skaitli.

## Ciparu grupas

Raku ir jauka funkcija, kas ļauj rakstīt lielus skaitļus ar vizuāliem palīglīdzekļiem, kas sadala ciparus tūkstošu grupās:

```raku
1_000_000
-3_141_592
```

Lai gan varat izveidot tādu skaitli kā `34_56`, labāk no tā izvairīties, jo tas var sajaukt citus cilvēkus, kas lasa jūsu kodu. Bet jūs nevarat izmantot divas blakus esošas pasvītras, tāpat jūs nevarat sākt vai beigt skaitli ar to.

## Patvaļīgi gari veseli skaitļi

Raku lieliski apstrādā skaitļus, kas pārsniedz 32 vai 64 bitu robežas. Piemēram, šāda programma ir pieņemama programma, kas reizinās divus lielus veselos skaitļus un izdrukās pareizu rezultātu.

```raku
say 1_234_456_789_012_345_678_901 * 987_654_321_098_765_432_100;
```

{% include nav.html %}