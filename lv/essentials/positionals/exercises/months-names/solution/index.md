---
title: 'Risinājums: Mēnešu nosaukumi'
---

{% include menu.html %}

Šajā programmā mēnešu nosaukumi tiek ņemti no masīva `@months`, kurā ir divpadsmit virknes. Tā kā masīva indeksi sākas ar 0, mums jāatņem ievades skaitlim 1, pirms mēs izmantojam to kā indeksu masīvā.

## Kods

Šeit ir risinājums:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Atrodiet programmu failā [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/months-names.raku).

## Izvade

Izmēģiniet dažus programmas palaišanas gadījumus, lai redzētu dažādus mēnešu nosaukumus.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Stils

Jūs varat izvēlēties vienu no iespējamiem veidiem, kā formatēt sarakstus, kā tas ir šajā programmā. Salīdziniet dažas iespējas:

```raku
my @months = <
    January February March April
    May June July August
    September October November December >;
```

Vai:

```raku
my @months = < January   February March    April
               May       June     July     August
               September October  November December >;
```

Jūs varat arī uzskaitīt visus mēnešus vienā rindā.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}