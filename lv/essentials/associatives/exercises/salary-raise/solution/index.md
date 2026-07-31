---
title: 'Risinājums: Algas palielināšana'
---

{% include menu.html %}

Programmai ir jāatjaunina viena no dotā hash vērtībām. Jaunas vērtības piešķiršana daudz neatšķiras no jaunas skalarās mainīgās vērtības iestatīšanas.

## Kods

Šeit ir risinājums:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # procentos

%employee<salary> *= (1 + $raise / 100);
say "Jaunā %employee<full-name> alga: %employee<salary>";
```

🦋 Atrodiet programmu failā [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/salary-raise.raku).

## Izvade

Palaidot programmu, pārliecinieties, ka esat veicis derīgus aprēķinus un pareizi konvertējis procentu skaitu.

```console
$ raku exercises/associatives/salary-raise.raku
Jaunā Eliza Vents alga: 3150
```

{% include nav.html %}