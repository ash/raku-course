---
title: 'Ejercicio: Distancia de viaje'
---

{% include menu.html %}

## Problema

Crea un programa que encuentre la distancia total del viaje definido por el siguiente arreglo:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Imprime la distancia de cada segmento del itinerario y la distancia total.

Usa el archivo [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) con el _hash de hashes_ que lista las distancias entre las ciudades.

## Ejemplo

Para la lista de ciudades dada, la salida del programa se ve así:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}