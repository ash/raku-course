---
title: 'Solvo: Figuro kaj kvadrato'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [shape-and-square.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/shape-and-square.raku).

## Eligo

```
I am a square
```

## Komentoj

1. `Square` heredas `describe` el `Shape` kaj superregas nur `name`.

1. `describe` vokas `self.name`, kiu prenas la superregantan `name`, do la priskribo diras `square` anstataŭ `shape`.

{% include nav.html %}
