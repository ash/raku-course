---
title: 'Solution: Відстань подорожі*'
---

{% include menu.html %}

Хеш хешів, який ви знайдете у файлі [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku), є трохи надлишковою, але дуже зручною структурою даних, яку ви можете використовувати для отримання відстані між будь-якою парою міст.

Решта програми складається з кількох вкладених циклів для сканування всіх сегментів маршруту та підсумовування загальної відстані.

## Код

Ось рішення, де великий набір даних показано лише частково.

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

🦋 Знайдіть програму з усією структурою даних у файлі [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/travel-distance.raku).

## Вивід

Для даного маршруту вивід програми показано нижче. Спробуйте інші шляхи через міста, які ми маємо у хеші `%distance`.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

{% include nav.html %}