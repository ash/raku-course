---
title: 'Solution: Join con dos puntos'
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say <a b c>.reverse.join: '-';
```

🦋 Encuentra el programa en el archivo [colon-join.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/colon-calls/colon-join.raku).

## Salida

```
c-b-a
```

## Comentarios

1. `.reverse` mantiene su forma normal porque esta en el medio de la cadena. `join` viene al final, así que puede usar los dos puntos, pasando `'-'` exactamente como lo haría `join('-')`.

1. La lista invertida a `c, b, a` se une luego con guiones, dando `c-b-a`. La forma con dos puntos funciona con valores ordinarios, no solo con bloques.

{% include nav.html %}
