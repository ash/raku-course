---
title: 'Solutio: Figura et quadratum'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [shape-and-square.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/shape-and-square.raku).

## Exitus

```
I am a square
```

## Commentarii

1. `Square` `describe` ex `Shape` heredat et solum `name` superscribit.

1. `describe` `self.name` vocat, quod `name` superscriptam capit, itaque descriptio `square` potius quam `shape` dicit.

{% include nav.html %}
