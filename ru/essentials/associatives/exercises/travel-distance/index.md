---
title: 'Exercise: Travel distance'
---

{% include menu.html %}

## Problem

Создайте программу, которая находит общее расстояние поездки, определенной следующим массивом:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Выведите расстояние каждого сегмента маршрута и общее расстояние.

Используйте файл [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) с _хэшем хэшей_, который содержит расстояния между городами.

## Example

Для данного списка городов, вывод программы выглядит следующим образом:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

## Solution

✅ [См. решение](solution)

{% include nav.html %}