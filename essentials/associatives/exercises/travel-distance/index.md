---
title: 'Exercise: Travel distance'
---

{% include menu.html %}

## Problem

Create a program that finds the total distance of the trip that is defined by the following array:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Print the distance of each segment of the ininerary and the total distance.

Use the file [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) with the _hash of hashes_ for distances between the cities.

## Example

For the given list of cities, the output of the program looks like this:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
