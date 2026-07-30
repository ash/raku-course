---
title: 'Oplossing: Oppervlakte van een rechthoek'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
class Rectangle {
    has $.width;
    has $.height;

    method area {
        $.width * $.height;
    }

    method describe {
        "area is " ~ self.area;
    }
}

say Rectangle.new(width => 3, height => 4).describe;
```

🦋 Je kunt de broncode vinden in het bestand [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Uitvoer

```
area is 12
```

## Opmerkingen

1. De methode `area` leest de eigen `width` en `height` van het object via hun accessors en vermenigvuldigt ze — voor een rechthoek van `3` bij `4` is dat `12`.

1. De methode `describe` herhaalt die berekening niet. In plaats daarvan roept ze `self.area` aan, waarmee de methode `area` op hetzelfde object draait en het resultaat hergebruikt wordt. Groter gedrag zo uit kleinere methoden opbouwen houdt elke methode verantwoordelijk voor één taak.

{% include nav.html %}
