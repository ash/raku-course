---
title: 'Oplossing: Een formule op de klasse'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Je kunt de broncode vinden in het bestand [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Uitvoer

```
314
```

## Opmerkingen

1. De methode raakt geen enkel attribuut aan — ze werkt alleen met haar parameter `$r` — dus kan ze op de klasse zelf aangeroepen worden, zonder eerst een object te maken.

1. `Geometry.circle-area(10)` roept de methode op het typeobject aan en geeft `10` mee. Het resultaat is `π * 10 * 10`, en na afronding `314`.

{% include nav.html %}
