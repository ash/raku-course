---
title: Subroutines versus methoden
translations_gpt:
---

{% include menu.html %}

Je hebt nu twee manieren om een stuk gedrag te verpakken: een _subroutine_ en een _methode_. Ze lijken op elkaar maar worden verschillend gebruikt.

Een subroutine staat op zichzelf. Je roept hem bij naam aan en geeft hem alles wat hij nodig heeft als argumenten mee:

```raku
sub area-of($radius) {
    π * $radius * $radius;
}

say area-of(2); # 12.566370614359172
```

Een methode hoort bij een klasse en wordt met de punt op een object aangeroepen. Ze kan via `self` en de accessors van de attributen de eigen gegevens van het object gebruiken, dus die gegevens geef je niet mee:

```raku
class Circle {
    has $.radius;

    method area {
        π * $.radius * $.radius;
    }
}

say Circle.new(radius => 2).area; # 12.566370614359172
```

Beide berekenen hetzelfde getal. Het verschil zit in waar de gegevens vandaan komen: de subroutine krijgt de straal als argument, terwijl de methode hem afleest van het object waarop ze is aangeroepen.

Als vuistregel: gebruik een subroutine voor een op zichzelf staande bewerking die eenvoudigweg haar argumenten omzet, en een methode wanneer het gedrag van nature bij een object hoort en met de eigen toestand van dat object werkt. Voor klassespecifieke maar generieke routines gebruik je klassemethoden.

{% include nav.html %}
