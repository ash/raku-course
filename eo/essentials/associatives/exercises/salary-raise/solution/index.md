---
title: 'Solvo: Salajra altiĝo'
---

{% include menu.html %}

La programo devas ĝisdatigi unu el la valoroj de la donita haketo. Atribui novan valoron ne multe diferencas de agordi novan valoron de skalaro.

## Kodo

Jen la solvo:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # en procentoj

%employee<salary> *= (1 + $raise / 100);
say "Nova salajro de %employee<full-name>: %employee<salary>";
```

🦋 Trovu la programon en la dosiero [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/salary-raise.raku).

## Eligo

Kiam vi rulas la programon, certigu, ke vi faris validajn kalkulojn kaj ĝuste konvertis la nombron de procentoj.

```console
$ raku exercises/associatives/salary-raise.raku
Nova salajro de Eliza Vents: 3150
```

{% include nav.html %}