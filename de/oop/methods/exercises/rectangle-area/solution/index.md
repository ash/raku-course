---
title: 'Lösung: Fläche eines Rechtecks'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

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

🦋 Du findest den Quellcode in der Datei [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Ausgabe

```
area is 12
```

## Kommentare

1. Die Methode `area` liest über die Accessoren die eigene `width` und `height` des Objekts und multipliziert sie — für ein Rechteck von `3` mal `4` ergibt das `12`.

1. Die Methode `describe` wiederholt diese Rechnung nicht. Stattdessen ruft sie `self.area` auf, führt also die Methode `area` auf demselben Objekt aus und verwendet deren Ergebnis wieder. Größeres Verhalten auf diese Weise aus kleineren Methoden aufzubauen hält jede Methode für genau eine Aufgabe zuständig.

{% include nav.html %}
