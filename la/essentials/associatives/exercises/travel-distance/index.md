---
title: 'Exercitium: Iter distantiae'
---

{% include menu.html %}

## Problema

Crea programma quod inveniat totalem distantiam itineris quae definita est per sequentem array:

```raku
my @itinerary = < Berolinum Praga Vindobona Turicum Lutetia >;
```

Imprime distantiam cuiusque segmenti itineris et totalem distantiam.

Utere fasciculo [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) cum _hash hashium_ qui enumerat distantias inter urbes.

## Exemplum

Pro dato indice urbium, output programmatis sic se habet:

```console
$ raku travel-distance.raku
Berolinum — Praga: 354 km
Praga — Vindobona: 312 km
Vindobona — Turicum: 784 km
Turicum — Lutetia: 557 km
Totum iter: 2007 km
```

## Solutio

✅ [Vide solutionem](solution)

{% include nav.html %}