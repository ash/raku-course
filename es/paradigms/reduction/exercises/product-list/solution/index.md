---
title: 'Solución: Producto de una lista'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say [*] 1..6;
```

🦋 Puedes encontrar el código fuente en el archivo [product-list.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/product-list.raku).

## Salida

```
720
```

## Comentarios

1. `[*]` inserta `*` entre todos los elementos del rango, multiplicándolos todos.

1. `1 * 2 * 3 * 4 * 5 * 6` es `720`, lo mismo que el factorial de `6`.

{% include nav.html %}
