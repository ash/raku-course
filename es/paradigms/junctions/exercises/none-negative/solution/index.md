---
title: 'Solución: Ninguno negativo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say so none(3, 7, 2) < 0;
```

🦋 Puedes encontrar el código fuente en el archivo [none-negative.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/none-negative.raku).

## Salida

```
True
```

## Comentarios

1. Una unión `none` es verdadera cuando **ningún** valor coincide con la comparación.

1. Ninguno de `3, 7, 2` está por debajo de cero, así que el resultado es `True`. Un solo valor negativo lo haría `False`.

{% include nav.html %}
