---
title: 'Esercizio: Distanza di viaggio'
---

{% include menu.html %}

## Problema

Crea un programma che trovi la distanza totale del viaggio definito dal seguente array:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Stampa la distanza di ogni segmento dell'itinerario e la distanza totale.

Usa il file [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) con l'_hash di hash_ che elenca le distanze tra le città.

## Esempio

Per la lista di città data, l'output del programma appare così:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

## Soluzione

✅ [Vedi la soluzione](solution)

{% include nav.html %}