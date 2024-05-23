---
title: 'Ekzerco: Vojaĝa distanco'
---

{% include menu.html %}

## Problemo

Kreu programon kiu trovas la totalan distancon de la vojaĝo difinita per la sekva aro:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Presu la distancon de ĉiu segmento de la itinero kaj la totalan distancon.

Uzu la dosieron [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) kun la _hash de hash_ kiu listigas la distancojn inter la urboj.

## Ekzemplo

Por la donita listo de urboj, la eligo de la programo aspektas tiel:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}