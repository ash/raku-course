---
title: 'Solution: Un rango abierto'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say (2, 4 ... *).head(4);
```

🦋 Encuentra el programa en el archivo [open-range.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/whatever/open-range.raku).

## Salida

```
(2 4 6 8)
```

## Comentarios

1. Las semillas `2, 4` establecen un paso aritmético de dos, y la estrella `*` sola como punto final significa que la secuencia nunca termina.

1. `head(4)` toma solo los primeros cuatro valores, `2, 4, 6, 8`. La secuencia es perezosa, por lo que la cola ilimitada nunca se calcula — la estrella sola aquí significa "lo que sea, sin limite superior".

{% include nav.html %}
