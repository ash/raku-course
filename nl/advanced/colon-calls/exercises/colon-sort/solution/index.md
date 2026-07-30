---
title: 'Solution: Sorteren met een dubbele punt'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
my @words = <pear fig apple kiwi>;
say @words.sort: *.chars;
```

🦋 De broncode is te vinden in het bestand [colon-sort.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-sort.raku).

## Uitvoer

```
(fig pear kiwi apple)
```

## Opmerkingen

1. De dubbele punt geeft de sorteersleutel door aan `sort` zonder dat er haakjes omheen nodig zijn.

1. `*.chars` is een Whatever-expressie die staat voor "het aantal tekens van elk element". `sort` gebruikt het als sleutel, zodat de woorden van kortste naar langste komen: `fig` (3), dan `pear` en `kiwi` (4), en dan `apple` (5).

1. `pear` behoudt zijn positie voor `kiwi` omdat ze dezelfde lengte hebben en `sort` stabiel is, wat de oorspronkelijke volgorde van gelijke sleutels behoudt.

{% include nav.html %}
