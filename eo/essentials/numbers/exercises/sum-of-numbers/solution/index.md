---
title: Solvo al ‘Sumo de nombroj’
---

{% include menu.html %}

Jen la solvo al la problemo.

## Kodo

```raku
my $a = prompt 'Enigu numeron A: ';
my $b = prompt 'Enigu numeron B: ';
my $c = prompt 'Enigu numeron C: ';

my $sum = $a + $b + $c;

say "La sumo de la nombroj estas $sum.";
```

🦋 Vi povas trovi la tutan kodon en la dosiero [sum-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/numbers/sum-of-numbers.raku).

## Eligo

Rulu la programon kelkajn fojojn kaj konfirmu ke ĝi funkcias kun nombroj de malsamaj specoj.

```console
$ raku exercises/numbers/sum-of-numbers.raku
Enigu numeron A: 1.2
Enigu numeron B: -3.4
Enigu numeron C: 45
La sumo de la nombroj estas 42.8.
```

## Komentoj

Rimarku ke ni rekte uzas la valoron redonitan de la `prompt` rutino. Tio povas kaŭzi problemojn se la uzanto enigas ŝnuron kiu ne reprezentas valoron. Ni povas plibonigi la programon en la estonteco post kiam ni lernos pri esceptoj.

{% include nav.html %}