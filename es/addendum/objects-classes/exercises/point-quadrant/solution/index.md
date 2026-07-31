---
title: 'Solución: Qué cuadrante'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Point {
    has $.x;
    has $.y;

    method quadrant {
        return 'origin'     if $.x == 0 && $.y == 0;
        return 'on an axis' if $.x == 0 || $.y == 0;
        return $.x > 0 ?? ($.y > 0 ?? 'first'  !! 'fourth')
                       !! ($.y > 0 ?? 'second' !! 'third');
    }
}

for Point.new(x => 3, y => 4),  Point.new(x => -2, y => 5),
    Point.new(x => -1, y => -6), Point.new(x => 0, y => 3) -> $point {
    say "({$point.x}, {$point.y}): {$point.quadrant}";
}
```

🦋 Puedes encontrar el código fuente en el archivo [point-quadrant.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/point-quadrant.raku).

## Salida

```
(3, 4): first
(-2, 5): second
(-1, -6): third
(0, 3): on an axis
```

## Comentarios

1. Los dos `return` anticipados tratan primero los casos especiales — el origen y los
puntos que caen sobre un eje —, de modo que el resto del método puede dar por hecho que
ambas coordenadas son distintas de cero.

1. El ternario anidado lee entonces el cuadrante a partir de los signos de `x` e `y`: una
`x` positiva significa el primer o el cuarto cuadrante, una `x` negativa el segundo o el
tercero.

{% include nav.html %}
