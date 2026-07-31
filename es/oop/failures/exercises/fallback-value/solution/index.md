---
title: 'Solución: Un valor de reserva'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
sub get($x) {
    fail 'bad' if $x == 0;
    return $x;
}

say get(5) // 'default';
say get(0) // 'default';
```

🦋 Puedes encontrar el código fuente en el archivo [fallback-value.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/failures/fallback-value.raku).

## Salida

```
5
default
```

## Comentarios

1. `get(5)` devuelve `5` con normalidad, así que `//` lo conserva.

1. `get(0)` devuelve un `Failure` no definido, así que `//` se repliega a `'default'`. Como un `Failure` no está definido, `//` lo maneja en silencio, sin lanzar nada.

{% include nav.html %}
