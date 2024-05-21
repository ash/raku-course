---
title: 'Risinājums: Garais gads'
---

{% include menu.html %}

## Atruna

Zemāk parādītais risinājums ir paredzēts, lai jūs apmācītu, izmantojot nosacījumu pārbaudes. Reālajā dzīvē jūs varat izmantot iebūvētās `Date` klases metodes. Mēs to apgūsim kursa otrajā daļā.

## Risinājums

Algoritms, lai noteiktu, vai gads ir garais gads:

1. ja gads nav dalāms ar 4 => parastais gads
1. ja gads nav dalāms ar 100 => garais gads
1. ja gads nav dalāms ar 400 => parastais gads
1. citādi => garais gads

Ņemiet vērā, ka varat izmantot iebūvētos tipus darbam ar datumiem un laiku, tāpēc mēs atgriezīsimies pie šī uzdevuma kursa otrajā daļā.

## Kods 1

Pirmais risinājums burtiski atkārto iepriekš minētās darbības:

```raku
my $year = prompt 'Gads: ';

if $year % 4 {
    say 'Parastais gads';
}
elsif $year % 100 {
    say 'Garais gads';
}
elsif $year % 400 {
    say 'Parastais gads';
}
else {
    say 'Garais gads';
}
```

🦋 Atrodiet programmu failā [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year.raku).

## Kods 2

Otrajā risinājumā loģika ir apkopota vienā izteiksmē. Iekavas ne vienmēr ir nepieciešamas, bet šeit pievienotas skaidrības labad.

```raku
my $year = prompt 'Gads: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Garais gads' !! 'Parastais gads';
```

🦋 Atrodiet programmu failā [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year-formula.raku).

## Izvade

Izmēģiniet abas programmas ar vissvarīgākajiem gadījumiem, piemēram, 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Gads: 1900
Parastais gads

$ raku exercises/conditional-checks/leap-year.raku
Gads: 2000
Garais gads
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Gads: 2020
Garais gads

$ raku exercises/conditional-checks/leap-year-formula.raku
Gads: 2021
Parastais gads
```

%%tipblock
## `%%` vs `%`

Ņemiet vērā, ka loģiskos kontekstos operatori `%%` un `%` ir komplementāri. Jūs varat izmantot šo faktu, lai izvēlētos vienu no operatoriem, lai izvairītos no tiešas salīdzināšanas ar nulli.

```raku
say ?(100 % 3);    # True
say 100 % 3 != 0;  # True

say ?(100 %% 3);   # False
say 100 %% 3 != 0; # False
```
%%/tipblock

{% include nav.html %}