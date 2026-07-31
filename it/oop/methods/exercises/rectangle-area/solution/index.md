---
title: 'Soluzione: Area del rettangolo'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Output

```
area is 12
```

## Commenti

1. Il metodo `area` legge i propri `width` e `height` attraverso i loro accessori e li moltiplica — per un rettangolo `3` per `4`, fa `12`.

1. Il metodo `describe` non ripete quel calcolo. Chiama invece `self.area`, eseguendo il metodo `area` sullo stesso oggetto e riusandone il risultato. Costruire in questo modo un comportamento più ampio a partire da metodi più piccoli tiene ogni metodo responsabile di un compito solo.

{% include nav.html %}
