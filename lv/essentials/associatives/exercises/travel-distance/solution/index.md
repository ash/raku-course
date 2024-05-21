---
title: 'Risinājums: Ceļojuma attālums'
---

{% include menu.html %}

Hash tabula, kuru jūs atradīsiet failā [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku), ir nedaudz lieka, bet ļoti ērta datu struktūra, kuru var izmantot, lai iegūtu attālumu starp jebkuriem diviem pilsētu pāriem.

Pārējā programma sastāv no pāris ligzdotiem cikliem, lai pārbaudītu visus maršruta posmus un summētu kopējos attālumus.

## Kods

Šeit ir risinājums, kurā lielais datu kopums ir parādīts tikai daļēji.

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

🦋 Atrodiet programmu ar visu datu struktūru failā [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/travel-distance.raku).

## Izvade

Dotajam maršrutam programmas izvade ir parādīta zemāk. Izmēģiniet citus ceļus caur pilsētām, kuras ir `%distance` hash tabulā.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

{% include nav.html %}