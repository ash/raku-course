---
title: 'Solution: Comparación encadenada'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
say 0 <= 73 <= 100;
```

🦋 Puedes encontrar el código fuente en el archivo [chained-comparison.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/operators-overview/chained-comparison.raku).

## Salida

```
True
```

## Comentarios

1. Los operadores de comparación pueden encadenarse, así que `0 <= 73 <= 100` se lee como "0 es como máximo 73, y 73 es como máximo 100". El operador `<=` permite los extremos, por lo que una puntuación de exactamente `0` o `100` también se consideraría válida.

1. Ambas partes son verdaderas, así que la expresión completa es `True`. Observa que el valor del medio `73` se escribe una sola vez, aunque se compara con ambos vecinos.

1. Sin la funcionalidad de encadenamiento, tendrías que escribir ambas comparaciones y unirlas con `&&`, repitiendo el valor del medio: `0 <= 73 && 73 <= 100`. La forma encadenada dice lo mismo de manera más concisa.

{% include nav.html %}
