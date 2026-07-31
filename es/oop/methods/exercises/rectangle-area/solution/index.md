---
title: 'Solución: Área del rectángulo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

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

🦋 Puedes encontrar el código fuente en el archivo [rectangle-area.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/rectangle-area.raku).

## Salida

```
area is 12
```

## Comentarios

1. El método `area` lee los propios `width` y `height` a través de sus accesores y los multiplica: para un rectángulo de `3` por `4`, eso es `12`.

1. El método `describe` no repite ese cálculo. En su lugar llama a `self.area`, ejecutando el método `area` sobre el mismo objeto y reutilizando su resultado. Construir así un comportamiento mayor a partir de métodos más pequeños mantiene a cada método responsable de una sola cosa.

{% include nav.html %}
