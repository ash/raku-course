---
title: 'Solution: Разстояние на пътуване*'
---

{% include menu.html %}

Хешът от хешове, който ще намерите във файла [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku), е малко излишна, но много удобна структура от данни, която можете да използвате, за да получите разстоянието между всяка двойка градове.

Останалата част от програмата е няколко вложени цикъла, които сканират всички сегменти на маршрута и добавят към общото разстояние.

## Код

Ето решението, където големият набор от данни е показан само частично.

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

🦋 Намерете програмата с цялата структура от данни във файла [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/travel-distance.raku).

## Резултат

За дадения маршрут, резултатът от програмата е показан по-долу. Опитайте други пътища през градовете, които имаме в хеша `%distance`.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

{% include nav.html %}