---
title: 'Solution: Coincidir por tipo'
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
my $value = 3.14;

given $value {
    when Int { say 'integer' }
    when Rat { say 'rational' }
    when Str { say 'string' }
}
```

🦋 Encuentra el programa en el archivo [match-by-type.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/match-by-type.raku).

## Salida

```
rational
```

## Comentarios

1. Cuando el valor a comparar es un tipo, la coincidencia inteligente pregunta si el topico *es de ese tipo*. `3.14` no es un `Int`, por lo que el primer `when` se omite.

1. Un literal decimal como `3.14` es un `Rat` (un numero racional) en Raku, por lo que el segundo `when` coincide y el programa imprime `rational`.

{% include nav.html %}
