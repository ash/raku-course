---
title: 'Übung: Reisedistanz'
---

{% include menu.html %}

## Problem

Erstelle ein Programm, das die Gesamtdistanz der Reise berechnet, die durch das folgende Array definiert wird:

```raku
my @itinerary = < Berlin Prag Wien Zürich Paris >;
```

Gib die Distanz jedes Segments der Reiseroute und die Gesamtdistanz aus.

Verwende die Datei [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) mit dem _Hash von Hashes_, der die Distanzen zwischen den Städten auflistet.

## Beispiel

Für die gegebene Liste von Städten sieht die Ausgabe des Programms wie folgt aus:

```console
$ raku travel-distance.raku
Berlin — Prag: 354 km
Prag — Wien: 312 km
Wien — Zürich: 784 km
Zürich — Paris: 557 km
Gesamte Reise: 2007 km
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}