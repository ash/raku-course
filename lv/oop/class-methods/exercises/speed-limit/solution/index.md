---
title: 'Risinājums: Formula klasē'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Atrodiet programmu failā [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Izvade

```
314
```

## Komentāri

1. Metode neaizskar nevienu atribūtu — tā strādā tikai ar savu parametru `$r` —, tāpēc to var izsaukt uz pašas klases, iepriekš neradot nevienu objektu.

1. `Geometry.circle-area(10)` izsauc metodi uz tipa objekta, padodot `10`. Rezultāts ir `π * 10 * 10`, un pēc noapaļošanas — `314`.

{% include nav.html %}
