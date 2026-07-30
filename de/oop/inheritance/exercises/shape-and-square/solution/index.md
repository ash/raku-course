---
title: 'Lösung: Eine Form und ein Quadrat'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
class Shape {
    method name {
        'shape';
    }
    method describe {
        'I am a ' ~ self.name;
    }
}

class Square is Shape {
    method name {
        'square';
    }
}

say Square.new.describe;
```

🦋 Du findest den Quellcode in der Datei [shape-and-square.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/shape-and-square.raku).

## Ausgabe

```
I am a square
```

## Kommentare

1. `Square` erbt `describe` von `Shape` und überschreibt nur `name`.

1. `describe` ruft `self.name` auf, was das überschreibende `name` aufgreift, daher sagt die Beschreibung `square` statt `shape`.

{% include nav.html %}
