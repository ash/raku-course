---
title: 'Упражнение: Пътуване разстояние'
---

{% include menu.html %}

## Проблем

Създайте програма, която намира общото разстояние на пътуването, което е дефинирано от следния масив:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Отпечатайте разстоянието на всеки сегмент от маршрута и общото разстояние.

Използвайте файла [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) с _хеш от хешове_, който изброява разстоянията между градовете.

## Пример

За дадения списък с градове, изходът на програмата изглежда така:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Общо пътуване: 2007 km
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}