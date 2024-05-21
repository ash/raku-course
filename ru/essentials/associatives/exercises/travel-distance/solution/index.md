---
title: 'Решение: Расстояние путешествия'
---

{% include menu.html %}

Хэш хэшей, который вы найдете в файле [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku), является немного избыточной, но очень удобной структурой данных, которую можно использовать для получения расстояния между любой парой городов.

Остальная часть программы состоит из пары вложенных циклов для сканирования всех сегментов маршрута и суммирования общих расстояний.

## Код

Вот решение, где большой набор данных показан только частично.

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

🦋 Найдите программу с полной структурой данных в файле [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/travel-distance.raku).

## Вывод

Для данного маршрута вывод программы показан ниже. Попробуйте другие пути через города, которые у нас есть в хэше `%distance`.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

{% include nav.html %}