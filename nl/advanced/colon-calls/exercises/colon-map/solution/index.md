---
title: 'Solution: Een dubbele-punt-map'
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de opgave.

## Code

```raku
say (1..10).map(* * 2).grep: * > 10;
```

🦋 De broncode is te vinden in het bestand [colon-map.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-map.raku).

## Uitvoer

```
(12 14 16 18 20)
```

## Opmerkingen

1. Alleen `grep`, de laatste aanroep in de keten, kan de dubbele-puntvorm gebruiken. De dubbele punt maakt `* > 10` het argument, precies zoals `grep(* > 10)` zou doen. Omdat we het resultaat nog moeten afdrukken, wordt `say` nu als functie gebruikt, niet als methode.

1. De `map`-aanroep moet zijn haakjes behouden. Als je `.map: * * 2` zou schrijven, zou de dubbele punt `.grep(* > 10)` opslikken als onderdeel van de argumenten van `map`, en de keten zou breken.

{% include nav.html %}
