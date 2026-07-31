---
title: 'Solución: Una fórmula en la clase'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Puedes encontrar el código fuente en el archivo [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Salida

```
314
```

## Comentarios

1. El método no toca ningún atributo — solo trabaja con su parámetro `$r` —, así que puede llamarse sobre la clase misma, sin crear antes ningún objeto.

1. `Geometry.circle-area(10)` llama al método sobre el objeto de tipo, pasándole `10`. El resultado es `π * 10 * 10` y, tras el redondeo, `314`.

{% include nav.html %}
