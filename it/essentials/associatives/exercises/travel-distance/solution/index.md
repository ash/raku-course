---
title: 'Soluzione: Distanza di viaggio'
---

{% include menu.html %}

L'hash di hash che trovi nel file [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) è una struttura dati un po' ridondante ma molto utile che puoi usare per ottenere la distanza tra qualsiasi coppia di città.

Il resto del programma consiste in un paio di cicli annidati per scansionare tutti i segmenti dell'itinerario e sommare i totali.

## Codice

Ecco la soluzione in cui il grande set di dati è mostrato solo parzialmente.

```raku
my %distance = 
    Amsterdam => {
        Athens => 3082,
        Berlin => 648,
        # . . .
    },
    # . . .
    Zurich => {
        Amsterdam => 861,
        Athens => 2449,
        # . . .
    };

my @itinerary = < Berlin Prague Vienna Zurich Paris >;

my $total = 0;
for 0 .. @itinerary.elems - 2 -> $index {
    my $from = @itinerary[$index];
    my $to = @itinerary[$index + 1];

    my $distance = %distance{$from}{$to};
    say "$from — $to: $distance km";
    $total += $distance;
}

say "Total trip: $total km";
```

🦋 Trova il programma con l'intera struttura dati nel file [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/travel-distance.raku).

## Output

Per l'itinerario dato, l'output del programma è mostrato di seguito. Prova altri percorsi attraverso le città che abbiamo nell'hash `%distance`.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

{% include nav.html %}