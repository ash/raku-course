---
title: 'Solución: Sumar vectores'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Vector {
    has $.x;
    has $.y;

    method add(Vector $v) {
        Vector.new(x => $.x + $v.x, y => $.y + $v.y);
    }

    method Str { "($.x, $.y)" }
}

my $sum = Vector.new(x => 1, y => 2).add(Vector.new(x => 3, y => 4));

put $sum;
```

🦋 Puedes encontrar el código fuente en el archivo [vector-add.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/objects-classes/vector-add.raku).

## Salida

```
(4, 6)
```

## Comentarios

1. `add` no cambia ninguno de los dos vectores; construye y devuelve un `Vector`
completamente nuevo a partir de las componentes sumadas.

1. Fíjate en que `Vector` se usa *dentro de su propia definición*: como tipo del
parámetro `Vector $v` y en `Vector.new`. Eso está perfectamente bien: el nombre del tipo
se conoce desde el momento en que empieza su declaración, así que una clase puede
referirse libremente a sí misma en sus propios métodos. No hace falta ninguna clase de
declaración anticipada.

1. `put` convierte su argumento en cadena con el método `Str`, así que lo que aparece es
el formato personalizado `"($.x, $.y)"`.

{% include nav.html %}
