---
title: 'Solución: Una clase punto'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Point {
    has $.x;
    has $.y;
}

my $a = Point.new(x => 3, y => 4);
my $b = Point.new(x => 0, y => 0);

my $dist = sqrt(($a.x - $b.x) ** 2 + ($a.y - $b.y) ** 2);
say $dist;
```

🦋 Puedes encontrar el código fuente en el archivo [point-class.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/point-class.raku).

## Salida

```
5
```

## Comentarios

1. Las dos declaraciones `has $.x` y `has $.y` crean los atributos junto con sus accesores de lectura.

1. Cada objeto guarda sus propios `x` e `y`, así que `$a` y `$b` informan de coordenadas distintas aunque sean del mismo tipo de objeto. Esa independencia es todo el sentido de los atributos: cada instancia lleva consigo sus propios datos.

{% include nav.html %}
