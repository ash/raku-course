---
title: 'Risinājums: Faktoriāls ar daudzfunkcijām'
---

{% include menu.html %}

Šis uzdevums atkal ir par faktoriāliem. Patiesībā, uzdevums ļauj mums ilustrēt vairāk Raku valodas iespēju.

Aprēķinot faktoriālu, sākot no dotā skaitļa un ejot uz leju, jums ir jāpārtrauc, kad skaitlis sasniedz 1. Ar vairāku funkciju palīdzību jūs varat to panākt, izdalot gadījumu ar `$n == 1` atsevišķā vairāku funkcijā.

## Kods

Šeit ir risinājums:

```raku
multi sub factorial(1)  { 1 }
multi sub factorial($n) { $n * factorial($n - 1) }

say factorial(@*ARGS[0].Int);
```

🦋 Atrodiet programmu failā [factorial-with-multi-functions.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/more-on-functions/factorial-with-multi-functions.raku).

## Izvade

```console
$ raku exercises/more-on-functions/factorial-with-multi-functions.raku 5
120
```

## Komentārs

Ņemiet vērā, ka ievades arguments tiek skaidri konvertēts uz veselu skaitli: `@*ARGS[0].Int`. Tas ir, lai novērstu bezgalīgu ciklu, kad ievades skaitlis ir `1`. Šajā gadījumā parametra tips, kas tiek nodots `factorial` funkcijai, ir [`IntStr`](/lv/essentials/typed-variables/allomorphs), un pirmā vairāku varianta nevar uztvert izsaukumu. Savukārt, kad `factorial(2 - 1)` tiek izsaukts rekursīvi, funkcijas arguments ir vesels skaitlis, kas ļauj izsaukt pirmo variantu.

{% include nav.html %}