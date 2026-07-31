---
title: 'Solvo: Superjaro'
---

{% include menu.html %}

## Disklajmo

La solvo montrita sube celas trejni vin uzante kondiĉajn kontrolojn. En la reala vivo, vi povas lerni la metodojn de la enkonstruita klaso `Date`. Ni lernos ĝin en la dua parto de la kurso.

## Solvo

La algoritmo por detekti ĉu jaro estas superjaro:

1. se jaro ne estas dividebla per 4 => komuna jaro
1. se jaro ne estas dividebla per 100 => superjaro
1. se jaro ne estas dividebla per 400 => komuna jaro
1. alie => superjaro

Notu, ke vi povas uzi la enkonstruitajn tipojn por labori kun dato kaj tempo, do ni revenos al ĉi tiu tasko en la dua parto de la kurso.

## Kodo 1

La unua solvo reproduktas la supre menciitajn paŝojn laŭlitere:

```raku
my $year = prompt 'Year: ';

if $year % 4 {
    say 'Common year';
}
elsif $year % 100 {
    say 'Leap year';
}
elsif $year % 400 {
    say 'Common year';
}
else {
    say 'Leap year';
}
```

🦋 Trovu la programon en la dosiero [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year.raku).

## Kodo 2

En la dua solvo, la logiko estas pakita en unu esprimon. Parentezoj ne estas ĉiam necesaj sed aldonitaj ĉi tie por klareco.

```raku
my $year = prompt 'Year: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Leap year' !! 'Common year';
```

🦋 Trovu la programon en la dosiero [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/conditional-checks/leap-year-formula.raku).

## Eligo

Provu ambaŭ programojn kun la plej kritikaj kazoj, ekzemple, 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Year: 1900
Common year

$ raku exercises/conditional-checks/leap-year.raku
Year: 2000
Leap year
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2020
Leap year

$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2021
Common year
```

%%tipblock
## `%%` vs `%`

Notu, ke en Booleaj kuntekstoj, la operatoroj `%%` kaj `%` estas komplementaj. Vi povas uzi ĉi tiun fakton por elekti unu el la operatoroj por eviti eksplicitan komparon kun nulo.

```raku
say ?(100 % 3);    # True
say 100 % 3 != 0;  # True

say ?(100 %% 3);   # False
say 100 %% 3 != 0; # False
```
%%/tipblock

{% include nav.html %}