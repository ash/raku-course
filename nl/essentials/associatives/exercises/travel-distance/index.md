---
title: 'Oefening: Reizen afstand'
---

{% include menu.html %}

## Probleem

Maak een programma dat de totale afstand van de reis berekent die wordt gedefinieerd door de volgende array:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Print de afstand van elk segment van de route en de totale afstand.

Gebruik het bestand [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) met de _hash van hashes_ die de afstanden tussen de steden vermeldt.

## Voorbeeld

Voor de gegeven lijst van steden ziet de uitvoer van het programma er als volgt uit:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Totale reis: 2007 km
```

## Oplossing

✅ [Zie de oplossing](solution)

{% include nav.html %}