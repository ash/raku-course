---
title: 'Solution: Potencias de dos'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Code

```raku
say (1, 2, 4 ... Inf).head(8);
```

🦋 Puedes encontrar el código fuente en el archivo [powers-of-two.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/sequences/powers-of-two.raku).

## Salida

```
(1 2 4 8 16 32 64 128)
```

## Comentarios

1. Los tres valores iniciales `1, 2, 4` crecen por multiplicación, así que `...` reconoce una secuencia geométrica; con `Inf` como punto final, nunca se detiene por sí sola.

1. `head(8)` extrae solo los primeros ocho valores. Debido a que la secuencia es perezosa, el resto nunca se genera, que es la única razón por la que es seguro escribir una secuencia infinita.

{% include nav.html %}
