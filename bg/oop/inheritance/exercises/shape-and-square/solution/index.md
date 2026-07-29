---
title: 'Решение: Фигура и квадрат'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

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

🦋 Намерете програмата във файла [shape-and-square.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/shape-and-square.raku).

## Изход

```
I am a square
```

## Коментари

1. `Square` наследява `describe` от `Shape` и предефинира само `name`.

1. `describe` извиква `self.name`, който подхваща предефинирания `name`, така че описанието казва `square`, а не `shape`.

{% include nav.html %}
