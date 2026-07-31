---
title: 'Solución: Una figura y un cuadrado'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

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

🦋 Puedes encontrar el código fuente en el archivo [shape-and-square.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/inheritance/shape-and-square.raku).

## Salida

```
I am a square
```

## Comentarios

1. `Square` hereda `describe` de `Shape` y solo sobrescribe `name`.

1. `describe` llama a `self.name`, que recoge el `name` sobrescrito, así que la descripción dice `square` en lugar de `shape`.

{% include nav.html %}
