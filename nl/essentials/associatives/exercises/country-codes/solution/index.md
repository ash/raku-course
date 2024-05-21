---
title: 'Oplossing: Landcodes'
---

{% include menu.html %}

In dit programma wordt het omzetten van een code naar een naam gedaan als een hash-opzoeking `%cc{$_}` in een lus over de `@codes` array.

## Code

Hier is de mogelijke oplossing (niet alle landen worden getoond):

```raku
my %cc =
    AD => 'Andorra',
    AE => 'Verenigde Arabische Emiraten',

    # . . .

    ZM => 'Zambia',
    ZW => 'Zimbabwe'
;

my @codes = < FR IT DE EE LV US CN IN BR >;

say %cc{$_} for @codes;
```

🦋 Vind het programma in het bestand [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/country-codes.raku).

## Uitvoer

Voor de gegeven invoercodes, print het programma de volgende lijst van landen:

```console
$ raku exercises/associatives/country-codes.raku
Frankrijk
Italië
Duitsland
Estland
Letland
Verenigde Staten van Amerika
China
India
Brazilië
```

{% include nav.html %}