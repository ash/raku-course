---
title: 'Solvo: Areo de ortangulo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Eligo

```
area is 12
```

## Komentoj

1. La metodo `area` legas la proprajn `width` kaj `height` de la objekto tra iliaj atingiloj kaj multiplikas ilin — por ortangulo `3` per `4`, tio estas `12`.

1. La metodo `describe` ne ripetas tiun kalkulon. Anstataŭe ĝi vokas `self.area`, rulante la metodon `area` sur la sama objekto kaj reuzante ĝian rezulton. Konstrui pli grandan konduton el pli malgrandaj metodoj tiel tenas ĉiun metodon respondeca pri unu laboro.

{% include nav.html %}
