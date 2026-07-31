---
title: 'Risinājums: No kilometriem uz jūdzēm'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Converter {
    method km-to-miles($km) {
        $km * 0.621;
    }
}

say Converter.km-to-miles(10);
```

🦋 Atrodiet programmu failā [km-to-miles.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/km-to-miles.raku).

## Izvade

```
6.21
```

## Komentāri

1. Pārveidošana nav atkarīga ne no viena konkrēta objekta, tāpēc tā ir uzrakstīta kā klases metode un izsaukta tieši uz `Converter`.

1. Klases metode joprojām var ņemt parametrus: šeit tā saņem kilometru skaitu un atgriež jūdzes.

{% include nav.html %}
