---
title: 'Solución: Exactamente uno'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
say so one(1, 2, 3) == 2;
```

🦋 Puedes encontrar el código fuente en el archivo [exactly-one.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/junctions/exactly-one.raku).

## Salida

```
True
```

## Comentarios

1. Una unión `one` es verdadera solo cuando coincide **exactamente un** valor con la comparación.

1. Exactamente uno de `1, 2, 3` es igual a `2`, así que el resultado es `True`. Si coincidieran dos (o ninguno), sería `False`. El `so` contrae la unión a un booleano corriente.

{% include nav.html %}
