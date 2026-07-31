---
title: 'Soluzione: Una figura e un quadrato'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

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

🦋 Trova il programma nel file [shape-and-square.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/shape-and-square.raku).

## Output

```
I am a square
```

## Commenti

1. `Square` eredita `describe` da `Shape` e sovrascrive soltanto `name`.

1. `describe` chiama `self.name`, che raccoglie il `name` sovrascritto, così la descrizione dice `square` invece di `shape`.

{% include nav.html %}
