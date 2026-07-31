---
title: 'Solution: Forzar el orden'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
say 2 ** (3 + 1);
```

🦋 Puedes encontrar el código fuente en el archivo [force-the-order.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/force-the-order.raku).

## Salida

```
16
```

## Comentarios

1. Sin los paréntesis, `**` se vincularía con más fuerza que `+`, dando `(2 ** 3) + 1 = 9`.

1. Los paréntesis elevan la precedencia de la suma, por lo que `3 + 1` se calcula primero y la expresión se convierte en `2 ** 4`, que es `16`. Los paréntesis siempre te permiten anular la precedencia por defecto.

{% include nav.html %}
