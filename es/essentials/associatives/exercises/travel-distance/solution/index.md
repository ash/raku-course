---
title: 'Solution: Distancia de viaje*'
---

{% include menu.html %}

El hash de hashes que encuentras en el archivo [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) es una estructura de datos un poco redundante pero muy útil que puedes usar para obtener la distancia entre cualquier par de ciudades.

El resto del programa es un par de bucles anidados para escanear todos los segmentos del itinerario y sumar los totales.

## Código

Aquí está la solución donde el gran conjunto de datos se muestra solo parcialmente.

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

🦋 Encuentra el programa con toda la estructura de datos en el archivo [travel-distance.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/travel-distance.raku).

## Salida

Para el itinerario dado, la salida del programa se muestra a continuación. Prueba otros caminos a través de las ciudades que tenemos en el hash `%distance`.

```console
$ raku exercises/associatives/travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

{% include nav.html %}