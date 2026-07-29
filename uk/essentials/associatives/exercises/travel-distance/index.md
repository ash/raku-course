---
title: Відстань подорожі*
---

{% include menu.html %}

## Завдання

Створіть програму, яка знаходить загальну відстань подорожі, заданої таким масивом:

```raku
my @itinerary = < Berlin Prague Vienna Zurich Paris >;
```

Виведіть відстань кожного відрізка маршруту та загальну відстань.

Скористайтеся файлом [distances.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/travel-distance/distances.raku) із _хешем хешів_, що перелічує відстані між містами.

## Приклад

Для наведеного списку міст вивід програми має такий вигляд:

```console
$ raku travel-distance.raku
Berlin — Prague: 354 km
Prague — Vienna: 312 km
Vienna — Zurich: 784 km
Zurich — Paris: 557 km
Total trip: 2007 km
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}
