---
title: 'Uzdevums: Ceļojuma distance'
---

{% include menu.html %}

## Problēma

Izveidojiet programmu, kas aprēķina kopējo ceļojuma attālumu, kas definēts ar šādu masīvu:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Izdrukājiet katra maršruta posma attālumu un kopējo attālumu.

Izmantojiet failu [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) ar _hash of hashes_, kas uzskaita attālumus starp pilsētām.

## Piemērs

Dotajam pilsētu sarakstam programmas izvade izskatās šādi:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

## Risinājums

✅ [Skatīt risinājumu](solution)

{% include nav.html %}