---
title: 'Solution: Un exponente opcional'
---

{% include menu.html %}

Aquí está una posible solución a la tarea.

## Código

```raku
sub power($base, $exp?) {
    $base ** ($exp // 2)
}

say power(5);
say power(5, 3);
```

🦋 Encuentra el programa en el archivo [optional-exponent.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/signatures/optional-exponent.raku).

## Salida

```
25
125
```

## Comentarios

1. El `?` después de `$exp` lo hace opcional, de modo que `power` puede llamarse solo con la base.

1. Cuando se omite `$exp`, queda indefinido, y `//` proporciona el valor de respaldo `2`, por lo que `power(5)` eleva la base al cuadrado, dando `25`. Cuando se proporciona un exponente, como en `power(5, 3)`, se usa ese valor en su lugar, dando `125`.

{% include nav.html %}
