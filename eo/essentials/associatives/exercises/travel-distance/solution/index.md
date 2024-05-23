---
title: 'Solvo: Vojaĝa distanco'
---

{% include menu.html %}

La tabelo de tabeloj, kiun vi trovas en la dosiero [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku), estas iom redundanta sed tre utila datuma strukturo, kiun vi povas uzi por akiri la distancon inter ajna paro de urboj.

La resto de la programo estas kelkaj nestitaj bukloj por skani ĉiujn segmentojn de la itinero kaj aldoni al la totaloj.

## Kodo

Jen la solvo kie la granda datuma aro estas montrita nur parte.

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

🦋 Trovu la programon kun la tuta datuma strukturo en la dosiero [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/travel-distance.raku).

## Eligo

Por la donita itinero, la eligo de la programo estas montrita sube. Provu aliajn vojojn tra la urboj, kiujn ni havas en la tabelo `%distance`.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

{% include nav.html %}