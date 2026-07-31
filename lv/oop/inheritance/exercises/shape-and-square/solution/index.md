---
title: 'Risinājums: Figūra un kvadrāts'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

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

🦋 Atrodiet programmu failā [shape-and-square.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/shape-and-square.raku).

## Izvade

```
I am a square
```

## Komentāri

1. `Square` manto `describe` no `Shape` un pārraksta tikai `name`.

1. `describe` izsauc `self.name`, kas paņem pārrakstīto `name`, tāpēc apraksts saka `square`, nevis `shape`.

{% include nav.html %}
