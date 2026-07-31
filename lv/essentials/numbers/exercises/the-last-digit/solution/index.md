---
title: 'Risinājums: Pēdējais cipars'
---

{% include menu.html %}

Šī uzdevuma risinājuma ideja ir izmantot dalījumu ar atlikumu pēc 10, lai iegūtu pēdējo ciparu skaitlim.

## Kods

Šeit ir risinājums:

```raku
my $n = prompt 'Ievadiet skaitli: ';
my $d = $n % 10;
say "Pēdējais cipars skaitlim $n ir $d.";
```

🦋 Atrodiet programmu failā [the-last-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/numbers/the-last-digit.raku).

## Izvade

Palaidiet programmu un ievadiet pozitīvu veselu skaitli:

```console
$ raku exercises/numbers/the-last-digit.raku
Ievadiet skaitli: 1234
Pēdējais cipars skaitlim 1234 ir 4.
```

## Komentārs

Ņemiet vērā, ka tas nedarbojas, kā paredzēts ar negatīviem skaitļiem, piemēram, `-11 % 10` ir `9`, nevis `1`.

{% include nav.html %}