---
title: 'Risinājums: Skaitļu summa'
---

{% include menu.html %}

Šeit ir risinājums uzdevumam.

## Kods

```raku
my $a = prompt 'Ievadiet skaitli A: ';
my $b = prompt 'Ievadiet skaitli B: ';
my $c = prompt 'Ievadiet skaitli C: ';

my $sum = $a + $b + $c;

say "Skaitļu summa ir $sum.";
```

🦋 Pilnu kodu var atrast failā [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/sum-of-numbers.raku).

## Izvade

Palaidiet programmu vairākas reizes un pārliecinieties, ka tā darbojas ar dažādu veidu skaitļiem.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Ievadiet skaitli A: 1.2
Ievadiet skaitli B: -3.4
Ievadiet skaitli C: 45
Skaitļu summa ir 42.8.
```

## Komentāri

Pamaniet, ka mēs tieši izmantojam vērtību, ko atgriež `prompt` funkcija. Tas var radīt problēmas, ja lietotājs ievada virkni, kas nepārstāv vērtību. Mēs varam uzlabot programmu nākotnē, kad iemācīsimies par izņēmumiem.

{% include nav.html %}