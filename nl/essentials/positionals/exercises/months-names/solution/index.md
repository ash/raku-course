---
title: 'Oplossing: Maandnamen'
---

{% include menu.html %}

In dit programma worden de namen van de maanden gehaald uit de array `@months` met twaalf strings erin. Aangezien array-indices beginnen met 0, moeten we het ingevoerde nummer met 1 verminderen voordat we de array subscripten.

## Code

Hier is de oplossing:

```raku
my @months = <
    January February March April
    May June July August
    September October November December
>;

say @months[@*ARGS[0] - 1];
```

🦋 Vind het programma in het bestand [months-names.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/months-names.raku).

## Uitvoer

Probeer een paar runs van het programma om verschillende namen van de maanden te zien.

```console
$ raku exercises/positionals/months-names.raku 5
May

$ raku exercises/positionals/months-names.raku 1
January

$ raku exercises/positionals/months-names.raku 12
December
```

## Stijl

Het is aan jou om een van de mogelijke manieren te kiezen om de lijsten zoals in dit programma te formatteren. Vergelijk een paar opties:

```raku
my @months = <
    January February March April
    May June July August
    September October November December >;
```

Of:

```raku
my @months = < January   February March    April
               May       June     July     August
               September October  November December >;
```

Je kunt ook alle maanden in één regel zetten.

```raku
my @months = < January February March April May June July August September October November December >;
```

{% include nav.html %}