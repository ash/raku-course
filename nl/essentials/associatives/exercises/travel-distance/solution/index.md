---
title: 'Oplossing: Reizen afstand'
---

{% include menu.html %}

De hash van hashes die je vindt in het bestand [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) is een beetje redundant maar een zeer handige datastructuur die je kunt gebruiken om de afstand tussen elk paar steden te krijgen.

De rest van het programma bestaat uit een paar geneste lussen om alle segmenten van de route te scannen en de totalen op te tellen.

## Code

Hier is de oplossing waarbij de grote dataset slechts gedeeltelijk wordt getoond.

```raku
my %distance = 
    Amsterdam => {
        Athene => 3082,
        Berlijn => 648,
        # . . .
    },
    # . . .
    Zürich => {
        Amsterdam => 861,
        Athene => 2449,
        # . . .
    };

my @itinerary = < Berlijn Praag Wenen Zürich Parijs >;

my $totaal = 0;
for 0 .. @itinerary.elems - 2 -> $index {
    my $van = @itinerary[$index];
    my $naar = @itinerary[$index + 1];

    my $afstand = %distance{$van}{$naar};
    say "$van — $naar: $afstand km";
    $totaal += $afstand;
}

say "Totale reis: $totaal km";
```

🦋 Vind het programma met de volledige datastructuur in het bestand [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/travel-distance.raku).

## Uitvoer

Voor de gegeven route wordt de uitvoer van het programma hieronder getoond. Probeer andere routes door de steden die we in de `%distance` hash hebben.

```console
$ raku exercises/associatives/travel-distance.raku
Berlijn — Praag: 354 km
Praag — Wenen: 312 km
Wenen — Zürich: 784 km
Zürich — Parijs: 557 km
Totale reis: 2007 km
```

{% include nav.html %}