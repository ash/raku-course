---
title: 'Solution: Una suma interna'
translations_gpt:
---

{% include menu.html %}

Aquí hay una posible solución para la tarea.

## Código

```raku
sub compute {
    sub add($x, $y) {
        $x + $y;
    }

    add(2, 3) + add(4, 5);
}

say compute;
```

🦋 Puedes encontrar el código fuente en el archivo [inner-sum.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/nested-subroutines/inner-sum.raku).

## Salida

```
14
```

## Comentarios

1. La función anidada `add` se usa dos veces dentro de `compute`: `add(2, 3)` es `5` y `add(4, 5)` es `9`.

1. Su suma, `14`, es el valor devuelto por `compute`.

{% include nav.html %}
