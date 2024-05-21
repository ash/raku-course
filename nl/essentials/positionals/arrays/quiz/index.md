---
title: Quiz — Arrays
---

{% include menu.html %}

Er is een array:

```raku
my @data = 10, 20, 30, 40, 50;
```

## Array-elementen

Wat printen de volgende regels?

{:.quiz-select}

10 | `say @data[0];` — (: 10, 20, 30, 40, 50 :) | Vergeet niet dat de elementen vanaf `0` worden geteld.
40 | `say @data[3];` — (: 10, 20, 30, 40, 50 :) | De index `3` staat voor het 4<sup>de</sup> element.
50 | `say @data[4];` — (: 10, 20, 30, 40, 50 :)

## Array-lengte

Wat printen de volgende uitspraken?

{:.quiz-select}
5 | `say @data.elems;` — (: 0, 1, 2, 3, 4, 5 :)
5 | `say +@data;` — (: 0, 1, 2, 3, 4, 5 :) | Deze conversie geeft de grootte van de array.
5 | `say +@data.elems;` — (: 0, 1, 2, 3, 4, 5 :) | Het resultaat van `@data.elems` casten naar een geheel getal, dus geen verandering.


{% include quiz.html %}

{% include nav.html %}